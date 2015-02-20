'use strict';

var matches = require( './../lib' );

console.log( matches( 'beep', 'beep,boop,bop' ) );
// returns true

var opts = [1,3,5,7,9];
console.log( matches( 5, opts.join(',') ) );
// returns true

console.log( matches( 'bap', 'beep,boop,bop' ) );
// returns false