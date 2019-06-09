/* global describe, it */

import assert from 'assert'
import { nthRoot, roundToNDecimals, getBaseLog } from '../src/math'

describe('nthRoot', () => {
  it('calculates the nth root of a number', () => {
    assert.strictEqual(Math.round(nthRoot(3, 64) * 10000) / 10000, 4)
  })
  it('can be curried', () => {
    assert.strictEqual(nthRoot(5)(130), nthRoot(5, 130))
  })
})

describe('roundToNDecimals', () => {
  it('rounds a number for a given number of decimals', () => {
    assert.strictEqual(roundToNDecimals(5, 3.987654321), 3.98765)
  })
  it('can be curried', () => {
    assert.strictEqual(roundToNDecimals(4)(9.87654321), roundToNDecimals(4, 9.87654321))
  })
})

describe('getBaseLog', () => {
  it('applies the n-base logarithm to a number ', () => {
    assert.strictEqual(getBaseLog(3, 243), 5)
  })
  it('can be curried', () => {
    assert.strictEqual(getBaseLog(4)(957), getBaseLog(4, 957))
  })
})
