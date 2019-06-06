/* global describe, it */

import assert from 'assert'
import { nthRoot, toNDecimals, getBaseLog } from '../src/math'

describe('nthRoot', () => {
  it('calculates the nth root of a number', () => {
    assert.strictEqual(Math.round(nthRoot(3, 64) * 10000) / 10000, 4)
  })
})

describe('toNDecimals', () => {
  it('rounds a number for a given number of decimals', () => {
    assert.strictEqual(toNDecimals(5, 3.987654321), 3.98765)
  })
})

describe('getBaseLog', () => {
  it('applies the n-base logarithm to a number ', () => {
    assert.strictEqual(getBaseLog(3, 243), 5)
  })
})
