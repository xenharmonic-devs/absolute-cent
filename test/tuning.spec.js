/* global describe, it */

import assert from 'assert'
import { map, multiply, range } from 'ramda'
import { highestNoteIndex } from '../src/constants'
import { parseTuning, retune } from '../src/tuning.js'
import tuning12tet from './data/tunings/12tet.json'

describe('parseTuning', () => {
  it('maps pitches to absolute cent values', () => {
    assert.deepStrictEqual(parseTuning(tuning12tet), map(multiply(100), range(0, highestNoteIndex + 1)))
  })
})

describe('retune', () => {
  it('rounds the given absoluteCent to the nearest value in the tuningData', () => {
    assert.strictEqual(retune(204.72, [0, 100, 200, 300, 400]), 200)
  })
})
