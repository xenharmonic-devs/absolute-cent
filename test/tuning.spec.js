/* global describe, it */

import assert from 'assert'
import { map, multiply, range } from 'ramda'
import { highestNoteIndex } from '../src/constants'
import { parseTuning } from '../src/tuning.js'
import tuning12tet from './data/tunings/12tet.json'

describe('parseTuning', () => {
  it('maps pitches to absolute cent values', () => {
    assert.deepStrictEqual(parseTuning(tuning12tet), map(multiply(100), range(0, highestNoteIndex + 1)))
  })
})
