# ember2-x-codemods

A collection of codemods for deprecations that can be found in ember 2.x to help upgrade to ember 3.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember2-x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember2-x-codemods
ember2-x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
`[contains-to-includes](transforms/contains-to-includes/README.md)` Ember 2.8 introduced a new [deprecation](https://deprecations.emberjs.com/v2.x#toc_ember-runtime-enumerable-contains) to remove the use of `contains` for `includes` for `Enumerable` and `Array`, this codemod will change migrate all such occurrences for you.

`[remove-binding](transforms/remove-binding/README.md)` Ember 2.7 introduced a [new deprecation to EmberBinding](https://deprecations.emberjs.com/v2.x#toc_ember-binding). This codemod aims to convert all existing uses of `fooBinding: 'path.to.property'` to `foo: alias('path.to.property')`.
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`

License
------------------------------------------------------------------------------

This project is licensed under the [GPLv3](LICENSE.md).

