const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        property: {
          name: 'contains',
        },
      },
    })
    .forEach((path) => {
      path.value.callee.property.name = 'includes';
    })
    .toSource();
};

module.exports.type = 'js';
