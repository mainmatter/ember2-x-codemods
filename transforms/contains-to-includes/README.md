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
* [array-expression](#array-expression)
* [variable](#variable)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="array-expression">**array-expression**</a>

**Input** (<small>[array-expression.input.js](transforms/contains-to-includes/__testfixtures__/array-expression.input.js)</small>):
```js
[1,2,3].contains(1);

```

**Output** (<small>[array-expression.output.js](transforms/contains-to-includes/__testfixtures__/array-expression.output.js)</small>):
```js
[1,2,3].includes(1);

```
---
<a id="variable">**variable**</a>

**Input** (<small>[variable.input.js](transforms/contains-to-includes/__testfixtures__/variable.input.js)</small>):
```js
let arr = [1,2,3];
arr.contains(1);

```

**Output** (<small>[variable.output.js](transforms/contains-to-includes/__testfixtures__/variable.output.js)</small>):
```js
let arr = [1,2,3];
arr.includes(1);

```
<!--FIXTURES_CONTENT_END-->