'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'remove-binding',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
