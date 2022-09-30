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
* [contains-to-includes](transforms/contains-to-includes/README.md)
* [property-to-computed](transforms/property-to-computed/README.md)
* [remove-binding](transforms/remove-binding/README.md)
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

