'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(key) {
  const a = key.toLowerCase().split(' ')

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1)
  }

  return a.join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('orange apple'), 'Orange Apple')
assert.strictEqual(jadenCase('Jaden case'), 'Jaden Case')

// End of tests */
