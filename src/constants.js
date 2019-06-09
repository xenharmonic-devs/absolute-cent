import { nthRoot } from './math'

const semitoneRatio = nthRoot(12, 2)
const centRatio = nthRoot(1200, 2)
const noteIndexOfA4 = 69
const highestNoteIndex = 127

const semitonesByKey = {
  a: 9,
  b: 11,
  c: 0,
  d: 2,
  e: 4,
  f: 5,
  g: 7
}

const semitonesByModifier = {
  x: 2,
  '#': 1,
  '': 0,
  b: -1,
  bb: -2
}

export { semitoneRatio, centRatio, noteIndexOfA4, highestNoteIndex, semitonesByKey, semitonesByModifier }
