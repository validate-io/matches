var matches = require( './../lib' );

console.log( matches( 'beep', 'beep,boop,bop' ) );
// Returns true

var opts = [1,3,5,7,9];
console.log( matches( 5, opts.join(',') ) );
// Returns true

console.log( matches( 'bap', 'beep,boop,bop' ) );
// Returns false