'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(a) {
  const yoo = a.toLowerCase()
  return yoo
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('Yellow'), 'yellow')
assert.strictEqual(yell('HELLO'), 'hello')
assert.strictEqual(yell('rEd'), 'red')

// End of tests */
