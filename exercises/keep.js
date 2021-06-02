'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(key) {
  if (typeof key === 'string') {
    key.split()
    return key[0] + key[1]
  }
}

function keepLast(a) {
  if (typeof a === 'string') {
    a.split()
    return a.slice(-2)
  }
}

function keepFirstLast(key) {
  if (typeof key === 'string') {
    return key.slice(3)
  } else {
    return undefined
  }
}

//* Begin of tests
const assert = require('assert')

// keepFirst Function
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst('Hello'), 'He')

// keepLast Function
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast('Hello'), 'lo')

// keepFirstLast Function
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast('Hello World'), 'lo World')
assert.strictEqual(keepFirstLast(1, 2), undefined)
assert.strictEqual(keepFirstLast([44, 58]), undefined)

// End of tests */
