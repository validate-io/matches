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

(function() {
	'use strict';

	/**
	* FUNCTION: matches( value, options )
	*	Validates if a value matches an allowed value.
	*
	* @param {String|Number} value - value to be validated (numeric values are converted to strings)
	* @param {String} options - possible matches serialized as a comma-delimited string
	* @returns {Boolean} boolean indicating whether value matches an allowed value
	*/
	function matches( value, options ) {
		var type = typeof value;
		if ( type !== 'string' && ( type !== 'number' || value !== value ) ) {
			return false;
		}
		if ( type === 'number' ) {
			value = value.toString();
		}
		options = options.split( ',' );
		return ( options.indexOf( value ) !== -1 );
	} // end FUNCTION matches()


	// EXPORTS //

	module.exports = matches;

})();