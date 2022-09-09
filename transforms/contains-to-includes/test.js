'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'contains-to-includes',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
