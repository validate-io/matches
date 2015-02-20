/**
*
*	VALIDATE: matches
*
*
*	DESCRIPTION:
*		- Validates if a value matches any one of a set of specified values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' ),
	isNumber = require( 'validate.io-number' );


// MATCHES //

/**
* FUNCTION: matches( value, options )
*	Validates if a value matches an allowed value.
*
* @param {String|Number} value - value to be validated (numeric values are converted to strings)
* @param {String} options - possible matches serialized as a comma-delimited string
* @returns {Boolean} boolean indicating whether value matches an allowed value
*/
function matches( value, opts ) {
	if ( !isString( opts ) ) {
		throw new TypeError( 'matches()::invalid input argument. List of options must be a string. Value: `' + opts + '`.' );
	}
	if ( !isString( value ) && !isNumber( value ) ) {
		return false;
	}
	if ( typeof value === 'number' ) {
		value = value.toString();
	}
	opts = opts.split( ',' );
	for ( var i = 0; i < opts.length; i++ ) {
		if ( opts[ i ] === value ) {
			return true;
		}
	}
	return false;
} // end FUNCTION matches()


// EXPORTS //

module.exports = matches;
