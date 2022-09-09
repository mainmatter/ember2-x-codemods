# remove-binding
Ember 2.7 introduced a [new deprecation to EmberBinding](https://deprecations.emberjs.com/v2.x#toc_ember-binding). This codemod aims to convert all existing uses of `fooBinding: 'path.to.property'` to `foo: alias('path.to.property')` and if the current file does not have the alias import the following line will also be added `import { alias } from '@ember/object/computed';`


## Usage

```
npx ember2-x-codemods remove-binding path/of/files/ or/some**/*glob.js

# or

yarn global add ember2-x-codemods
ember2-x-codemods remove-binding path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-binding path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
```js
let obj = {
  testBinding: 'this.app',
}
```
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
```js
import { alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
}
```
<!--FIXTURES_CONTENT_END-->