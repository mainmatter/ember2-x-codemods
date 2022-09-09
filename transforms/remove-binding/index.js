const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  const root = j(file.source);

  const node = root.find(j.ObjectProperty, {
    key: {
      type: 'Identifier',
    },
  });

  let filteredNodes = node.filter((path) => {
    return path.value.key.name && path.value.key.name.endsWith('Binding');
  });

  let imports = root.find(j.ImportDeclaration);

  let computedImports = imports.filter((importt) => {
    return importt.value.source.value === '@ember/object/computed';
  });

  let alreadyHasAlias =
    computedImports.length &&
    computedImports
      .get()
      .node.specifiers.filter((specifier) => specifier.imported.name === 'alias');

  if (!alreadyHasAlias[0] && filteredNodes.length) {
    if (computedImports.length) {
      let aliasSpecifier = j.importSpecifier(j.identifier('alias'));
      computedImports.get().value.specifiers.push(aliasSpecifier);
    } else {
      const computedImportStatement = `import { alias } from '@ember/object/computed';`;
      if (imports.length) {
        j(imports.at(0).get()).insertBefore(computedImportStatement); // before the imports
      } else {
        root.get().node.program.body.unshift(computedImportStatement); // begining of file
      }
    }
  }

  filteredNodes.forEach((path) => {
    path.value.value = j.callExpression(j.identifier('alias'), [path.value.value]);
    path.value.key.name = path.value.key.name.slice(0, -7);
  });
  return node.toSource();
};

module.exports.type = 'js';