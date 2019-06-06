/* global describe, it */

import assert from 'assert'
import { is, keys } from 'ramda'
import { semitoneRatio, centRatio, noteIndexOfA4, semitonesByKey, semitonesByModifier } from '../src/constants'

describe('semitoneRatio', () => {
  it('raising it to the 12th power should give 2', () => {
    assert.strictEqual(semitoneRatio ** 12, 2)
  })
})

describe('centRatio', () => {
  it('rising it to the 1200th power should give 2', () => {
    assert.strictEqual(Math.round(centRatio ** 1200 * 10000) / 10000, 2)
  })
})

describe('noteIndexOfA4', () => {
  it('should be 69', () => {
    assert.strictEqual(noteIndexOfA4, 69)
  })
})

describe('semitonesByKey', () => {
  it('is an object', () => {
    assert.strictEqual(is(Object, semitonesByKey), true)
  })
  it('contains keys from a to g', () => {
    assert.deepStrictEqual(keys(semitonesByKey), ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  })
})

describe('semitonesByModifier', () => {
  it('is an object', () => {
    assert.strictEqual(is(Object, semitonesByModifier), true)
  })
  it('contains keys with modifiers', () => {
    assert.deepStrictEqual(keys(semitonesByModifier), ['x', '#', '', 'b', 'bb'])
  })
})
