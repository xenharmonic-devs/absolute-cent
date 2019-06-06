import { memoizeWith, toString } from 'ramda'
import { toNDecimals, getBaseLog } from './math'
import { scientificNotationToSemitones, calculateFrequencyOfZeroCents } from './helpers'
import { semitoneRatio, centRatio } from './constants'

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
  toHertz,
  fromHertz,
  fromSemitones,
  fromScientificNotation
}
