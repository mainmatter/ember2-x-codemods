const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  const root = j(file.source);

  const node = root.find(j.ObjectProperty, {
    key: {
      type: 'Identifier',
    },
  });

  let nodesWithBindings = node.filter((path) => {
    return path.value.key.name && path.value.key.name.endsWith('Binding');
  });

  if (!nodesWithBindings.length) {
    return node.toSource();
  }

  let imports = root.find(j.ImportDeclaration);

  let computedImports = imports.filter((importt) => {
    return importt.value.source.value === '@ember/object/computed';
  });

  let alreadyHasAlias =
    computedImports.length &&
    computedImports.get().node.specifiers.some((specifier) => {
      return specifier.type === 'ImportSpecifier' && specifier.imported.name === 'alias';
    });

  if (!alreadyHasAlias) {
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

  nodesWithBindings.forEach(({ value: bindingProp }) => {
    bindingProp.value = j.callExpression(j.identifier('alias'), [bindingProp.value]);
    bindingProp.key.name = bindingProp.key.name.slice(0, -7);
  });
  return node.toSource();
};

module.exports.type = 'js';
