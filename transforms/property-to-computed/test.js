'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'property-to-computed',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
