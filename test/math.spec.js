/* global describe, it */

import assert from 'assert'
import {
  nthRoot,
  toNDecimals,
  getBaseLog
} from '../src/math'

describe('nthRoot', () => {
  it('calculates the nth root of a number', () => {
    assert.equal(Math.round(nthRoot(3, 64)), 4)
  })
})
