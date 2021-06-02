'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

const capitalize = function(a) {
  if (typeof a === 'string') {
    const rest = a[0].toUpperCase() + a.toLowerCase().slice(1, a.length)
    return rest
  }
}

//* Begin of tests
const assert = require('assert')
const { type } = require('os')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
