'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//*

function cutFirst(a) {
  if (typeof a === 'string') {
    return a.substring(2)
  } else {
    return 'false'
  }
}

function cutLast(b) {
  if (typeof b === 'string') {
    return b.slice(0, -2)
  } else {
    return 'false'
  }
}

function cutFirstLast(c) {
  if (typeof c === 'string') {
    return c.slice(2, -2)
  } else {
    return 'false'
  }
}

//* Begin of tests
const assert = require('assert')

// cutFirst Function:

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('ciel'), 'el')
assert.strictEqual(cutFirst('John'), 'hn')
assert.strictEqual(cutFirst([1, 2]), 'false')

// cutLast Function:

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast('august'), 'augu')
assert.strictEqual(cutLast('nice one'), 'nice o')
assert.strictEqual(cutLast([1, 2]), 'false')

// cutFirstLast Function

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast('hello'), 'l')
assert.strictEqual(cutFirstLast('Good Morning'), 'od Morni')
assert.strictEqual(cutFirstLast([1, 2]), 'false')

// End of tests */
