# contains-to-includes

Ember 2.8 introduced a new [deprecation](https://deprecations.emberjs.com/v2.x#toc_ember-runtime-enumerable-contains) to remove the use of `contains` for `includes, this codemod will change migrate all such occurrences for you.

## Usage

```
npx ember2-x-codemods contains-to-includes path/of/files/ or/some**/*glob.js

# or

yarn global add ember2-x-codemods
ember2-x-codemods contains-to-includes path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js contains-to-includes path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
```js
[1,2,3].contains(1);
```
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
```js
[1,2,3].includes(1);
```
<!--FIXTURES_CONTENT_END-->