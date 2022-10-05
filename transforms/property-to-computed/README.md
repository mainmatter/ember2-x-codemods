# property-to-computed
During ember 1 computed properties were written using function prototype extensions e.g.
```js
...
fullName: function() {
  return `${this.firstName} ${this.lastName}`;
}.property('firstName', 'lastName'),
...
```
This code mod will update the old `.property()` syntax to the `computed` syntax used in ember 2 & 3.

## Usage

```
npx ember2-x-codemods property-to-computed path/of/files/ or/some**/*glob.js

# or

yarn global add ember2-x-codemods
ember2-x-codemods property-to-computed path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js property-to-computed path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [alreadyHasDefaultImport](#alreadyHasDefaultImport)
* [alreadyHasImport](#alreadyHasImport)
* [basic](#basic)
* [import](#import)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="alreadyHasDefaultImport">**alreadyHasDefaultImport**</a>

**Input** (<small>[alreadyHasDefaultImport.input.js](transforms/property-to-computed/__testfixtures__/alreadyHasDefaultImport.input.js)</small>):
```js
import EmberObject from '@ember/object';
const Person = EmberObject.extend({
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName'),
});

```

**Output** (<small>[alreadyHasDefaultImport.output.js](transforms/property-to-computed/__testfixtures__/alreadyHasDefaultImport.output.js)</small>):
```js
import EmberObject, { computed } from '@ember/object';
const Person = EmberObject.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
});

```
---
<a id="alreadyHasImport">**alreadyHasImport**</a>

**Input** (<small>[alreadyHasImport.input.js](transforms/property-to-computed/__testfixtures__/alreadyHasImport.input.js)</small>):
```js
import { get } from '@ember/object';
const Person = EmberObject.extend({
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName'),
});

```

**Output** (<small>[alreadyHasImport.output.js](transforms/property-to-computed/__testfixtures__/alreadyHasImport.output.js)</small>):
```js
import { get, computed } from '@ember/object';
const Person = EmberObject.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
});

```
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/property-to-computed/__testfixtures__/basic.input.js)</small>):
```js
import { computed } from '@ember/object';
const Person = EmberObject.extend({
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName'),
});

```

**Output** (<small>[basic.output.js](transforms/property-to-computed/__testfixtures__/basic.output.js)</small>):
```js
import { computed } from '@ember/object';
const Person = EmberObject.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
});

```
---
<a id="import">**import**</a>

**Input** (<small>[import.input.js](transforms/property-to-computed/__testfixtures__/import.input.js)</small>):
```js
const Person = EmberObject.extend({
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName'),
});

```

**Output** (<small>[import.output.js](transforms/property-to-computed/__testfixtures__/import.output.js)</small>):
```js
import { computed } from '@ember/object';
const Person = EmberObject.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
});

```
<!--FIXTURES_CONTENT_END-->