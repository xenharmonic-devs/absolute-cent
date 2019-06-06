/* global describe, it */

import assert from 'assert'
import { scientificNotationToSemitones, calculateFrequencyOfZeroCents } from '../src/helpers'

describe('scientificNotationToSemitones', () => {
  it('parses notes to semitones', () => {
    assert.strictEqual(scientificNotationToSemitones('C4'), 60)
    assert.strictEqual(scientificNotationToSemitones('A4'), 69)
    assert.strictEqual(scientificNotationToSemitones('C#1'), 25)
  })
  it('starts octaves from -1', () => {
    assert.strictEqual(scientificNotationToSemitones('C-1'), 0)
  })
})

describe('calculateFrequencyOfZeroCents', () => {
  it('calculates the hertz of C-1 based on the frequency of A4', () => {
    assert.strictEqual(Math.round(calculateFrequencyOfZeroCents(440) * 10000) / 10000, 8.1758)
    assert.strictEqual(Math.round(calculateFrequencyOfZeroCents(432) * 10000) / 10000, 8.0271)
  })
})
