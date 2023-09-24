/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isNonNegative = require( '@stdlib/assert-is-nonnegative-number' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.sep] - separator used to join streamed data
* @param {boolean} [options.objectMode] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in the internal buffer before ceasing to generate additional pseudorandom numbers
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @param {string} [options.name] - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers
* @param {*} [options.seed] - pseudorandom number generator seed
* @param {*} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {PositiveInteger} [options.siter] - number of iterations after which to emit the PRNG state
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'objectMode': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( '0rn2V,FD', options ) );
	}
	if ( hasOwnProp( options, 'sep' ) ) {
		opts.sep = options.sep;
		if ( !isString( opts.sep ) ) {
			return new TypeError( format( '0rn2W,Gh', 'sep', opts.sep ) );
		}
	}
	if ( hasOwnProp( options, 'objectMode' ) ) {
		opts.objectMode = options.objectMode;
		if ( !isBoolean( opts.objectMode ) ) {
			return new TypeError( format( '0rn2o,GE', 'objectMode', opts.objectMode ) );
		}
	}
	if ( hasOwnProp( options, 'encoding' ) ) {
		opts.encoding = options.encoding;
		if ( !isString( opts.encoding ) && opts.encoding !== null ) {
			return new TypeError( format( '0rn7n,Ny', 'encoding', opts.encoding ) );
		}
	}
	if ( hasOwnProp( options, 'highWaterMark' ) ) {
		opts.highWaterMark = options.highWaterMark;
		if ( !isNonNegative( opts.highWaterMark ) ) {
			return new TypeError( format( '0rn4k,I9', 'highWaterMark', opts.highWaterMark ) );
		}
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( opts.iter ) ) {
			return new TypeError( format( '0rn2t,G9', 'iter', opts.iter ) );
		}
	}
	if ( hasOwnProp( options, 'siter' ) ) {
		opts.siter = options.siter;
		if ( !isPositiveInteger( opts.siter ) ) {
			return new TypeError( format( '0rn3P,Fv', 'siter', opts.siter ) );
		}
	}
	// Pass through options...
	if ( hasOwnProp( options, 'name' ) ) {
		opts.name = options.name;
	}
	if ( hasOwnProp( options, 'seed' ) ) {
		opts.seed = options.seed;
	}
	if ( hasOwnProp( options, 'state' ) ) {
		opts.state = options.state;
	}
	if ( hasOwnProp( options, 'copy' ) ) {
		opts.copy = options.copy;
	}
	return null;
}


// EXPORTS //

module.exports = validate;