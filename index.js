import { memoizeWith, toString } from 'ramda'
import { nthRoot, toNDecimals, getBaseLog, scientificNotationToSemitones } from './helpers'

const semitoneRatio = nthRoot(12, 2)
const centRatio = nthRoot(1200, 2)
const noteIndexOfA4 = 69

// calculateFrequencyOfZeroCents :: int -> float
const calculateFrequencyOfZeroCents = memoizeWith(toString, frequencyOfA4 => {
  return frequencyOfA4 / semitoneRatio ** noteIndexOfA4
})

// toHertz :: float -> int -> int -> float
const toHertz = memoizeWith(toString, (absoluteCent, frequencyOfA4 = 440, precision = 7) => {
  const result = calculateFrequencyOfZeroCents(frequencyOfA4) * centRatio ** absoluteCent
  return toNDecimals(precision, result)
})

// fromHertz :: float -> int -> int -> float
const fromHertz = memoizeWith(toString, (frequency, frequencyOfA4 = 440, precision = 7) => {
  const result = getBaseLog(centRatio, frequency / calculateFrequencyOfZeroCents(frequencyOfA4))
  return toNDecimals(precision, result)
})

const fromSemitones = memoizeWith(toString, (semitones, frequencyOfA4 = 440, precision = 7) => {
  const hertz = calculateFrequencyOfZeroCents(frequencyOfA4) * semitoneRatio ** semitones
  return fromHertz(hertz, frequencyOfA4, precision)
})

// fromScientificNotation :: string -> int -> int -> float
const fromScientificNotation = memoizeWith(toString, (note, frequencyOfA4 = 440, precision = 7) => {
  return fromSemitones(scientificNotationToSemitones(note), frequencyOfA4, precision)
})

export {
  calculateFrequencyOfZeroCents,
  toHertz,
  fromHertz,
  fromSemitones,
  fromScientificNotation
}
