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
* [alreadyHasComputedImport](#alreadyHasComputedImport)
* [alreadyImported](#alreadyImported)
* [basic](#basic)
* [classBindings](#classBindings)
* [importWithNamedAndDefaultImport](#importWithNamedAndDefaultImport)
* [importWithoutNamedImport](#importWithoutNamedImport)
* [randomProperty](#randomProperty)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="alreadyHasComputedImport">**alreadyHasComputedImport**</a>

**Input** (<small>[alreadyHasComputedImport.input.js](transforms/remove-binding/__testfixtures__/alreadyHasComputedImport.input.js)</small>):
```js
import { not } from '@ember/object/computed';
let obj = {
  testBinding: 'this.app',
}

```

**Output** (<small>[alreadyHasComputedImport.output.js](transforms/remove-binding/__testfixtures__/alreadyHasComputedImport.output.js)</small>):
```js
import { not, alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
}

```
---
<a id="alreadyImported">**alreadyImported**</a>

**Input** (<small>[alreadyImported.input.js](transforms/remove-binding/__testfixtures__/alreadyImported.input.js)</small>):
```js
import { alias } from '@ember/object/computed';
let obj = {
  testBinding: 'this.app',
}

```

**Output** (<small>[alreadyImported.output.js](transforms/remove-binding/__testfixtures__/alreadyImported.output.js)</small>):
```js
import { alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
}

```
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-binding/__testfixtures__/basic.input.js)</small>):
```js
let obj = {
  testBinding: 'this.app',
}

```

**Output** (<small>[basic.output.js](transforms/remove-binding/__testfixtures__/basic.output.js)</small>):
```js
import { alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
}

```
---
<a id="classBindings">**classBindings**</a>

**Input** (<small>[classBindings.input.js](transforms/remove-binding/__testfixtures__/classBindings.input.js)</small>):
```js
let obj = {
  classBindings: ['class'],
}

```

**Output** (<small>[classBindings.output.js](transforms/remove-binding/__testfixtures__/classBindings.output.js)</small>):
```js
let obj = {
  classBindings: ['class'],
}

```
---
<a id="importWithNamedAndDefaultImport">**importWithNamedAndDefaultImport**</a>

**Input** (<small>[importWithNamedAndDefaultImport.input.js](transforms/remove-binding/__testfixtures__/importWithNamedAndDefaultImport.input.js)</small>):
```js
import Computed, { not } from '@ember/object/computed';
let obj = {
  testBinding: 'this.app',
};
```

**Output** (<small>[importWithNamedAndDefaultImport.output.js](transforms/remove-binding/__testfixtures__/importWithNamedAndDefaultImport.output.js)</small>):
```js
import Computed, { not, alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
};
```
---
<a id="importWithoutNamedImport">**importWithoutNamedImport**</a>

**Input** (<small>[importWithoutNamedImport.input.js](transforms/remove-binding/__testfixtures__/importWithoutNamedImport.input.js)</small>):
```js
import Computed from '@ember/object/computed';
let obj = {
  testBinding: 'this.app',
};
```

**Output** (<small>[importWithoutNamedImport.output.js](transforms/remove-binding/__testfixtures__/importWithoutNamedImport.output.js)</small>):
```js
import Computed, { alias } from '@ember/object/computed';
let obj = {
  test: alias('this.app'),
};
```
---
<a id="randomProperty">**randomProperty**</a>

**Input** (<small>[randomProperty.input.js](transforms/remove-binding/__testfixtures__/randomProperty.input.js)</small>):
```js
let obj = {
  randomProperty: 'this.app',
}

```

**Output** (<small>[randomProperty.output.js](transforms/remove-binding/__testfixtures__/randomProperty.output.js)</small>):
```js
let obj = {
  randomProperty: 'this.app',
}

```
<!--FIXTURES_CONTENT_END-->