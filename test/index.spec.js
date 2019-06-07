/* global describe, it */

import assert from 'assert'
import { toHertz, fromHertz, fromSemitones, fromScientificNotation } from '../src/index'

describe('toHertz', () => {
  it('returns the Hz value of an absolute cent', () => {
    assert.strictEqual(toHertz(0), 8.1757989)
  })
  it('has an optional frequencyOfA4 argument', () => {
    assert.strictEqual(toHertz(6900), 440)
    assert.strictEqual(toHertz(6900, 432), 432)
  })
  it('has an optional precision argument', () => {
    assert.strictEqual(toHertz(0, 440, 5), 8.1758)
  })
})

describe('fromHertz', () => {
  it('returns the absolute cent value of a given Hz', () => {
    assert.strictEqual(fromHertz(440), 6900)
  })
  it('has an optional frequencyOfA4 argument', () => {
    assert.strictEqual(fromHertz(440, 432), 6931.7666536)
  })
  it('has an optional precision argument', () => {
    assert.strictEqual(fromHertz(440, 432, 3), 6931.767)
  })
})

describe('fromSemitones', () => {
  it('returns the absolute cent value of a given semitone', () => {
    assert.strictEqual(fromSemitones(69), 6900)
  })
})

describe('fromScientificNotation', () => {
  it('returns the absolute cent value of a given note written in scientific notation', () => {
    assert.strictEqual(fromScientificNotation('A4'), 6900)
  })
})
