
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-matches', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var result;
		
		result = validate( 'beep', 'beep,boop' );
		assert.ok( result );

		result = validate( 5, [5,7,9].join(',') );
		assert.ok( result );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				true,
				[],
				'5',
				'Beep',
				'boo',
				'beep,boop',
				function(){},
				null,
				NaN,
				{'beep':'bar'},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i], 'beep,boop' ) );
		}
	});

});