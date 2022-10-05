const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  let node = root.find(j.CallExpression, {
    callee: {
      type: 'MemberExpression',
      object: { type: 'FunctionExpression' },
      property: { name: 'property' },
    },
  });

  let imports = root.find(j.ImportDeclaration);
  let computedImports = imports.filter((importt) => {
    return importt.value.source.value === '@ember/object';
  });

  let alreadyHasComputed =
    computedImports.length &&
    computedImports.get().node.specifiers.some((specifier) => {
      return specifier.type === 'ImportSpecifier' && specifier.imported.name === 'computed';
    });

  if (!alreadyHasComputed) {
    if (computedImports.length) {
      let computedSpecifier = j.importSpecifier(j.identifier('computed'));
      computedImports.get().value.specifiers.push(computedSpecifier);
    } else {
      const computedImportStatement = `import { computed } from '@ember/object';`;
      if (imports.length) {
        j(imports.at(0).get()).insertBefore(computedImportStatement); // before the imports
      } else {
        root.get().node.program.body.unshift(computedImportStatement); // begining of file
      }
    }
  }

  node.replaceWith((path) => {
    let args = [...path.value.arguments].concat(path.value.callee.object);
    return j.callExpression(j.identifier('computed'), args);
  });

  return node.toSource();
};

module.exports.type = 'js';
