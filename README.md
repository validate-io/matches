Matches
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value matches any one of a set of specified values.


## Installation

``` bash
$ npm install validate.io-matches
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var matches = require( 'validate.io-matches' );

console.log( matches( 'beep', 'beep,boop,bop' ) );
// Returns true

var opts = [1,3,5,7,9];
console.log( matches( 5, opts.join(',') ) );
// Returns true

console.log( matches( 'bap', 'beep,boop,bop' ) );
// Returns false
```

## Notes

* 	This method applies __only__ to `string` and `number` value types. For any other type, the method returns `false`.
* 	The list of acceptable `matches` should be serialized as a comma-delimited `string`.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-matches.svg
[npm-url]: https://npmjs.org/package/validate.io-matches

[travis-image]: http://img.shields.io/travis/validate-io/matches/master.svg
[travis-url]: https://travis-ci.org/validate-io/matches

[coveralls-image]: https://img.shields.io/coveralls/validate-io/matches/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/matches?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/matches.svg
[dependencies-url]: https://david-dm.org/validate-io/matches

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/matches.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/matches

[github-issues-image]: http://img.shields.io/github/issues/validate-io/matches.svg
[github-issues-url]: https://github.com/validate-io/matches/issues