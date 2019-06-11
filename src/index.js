import { roundToNDecimals, getBaseLog } from './math'
import { scientificNotationToSemitones, calculateFrequencyOfZeroCents } from './helpers'
import { centRatio } from './constants'

// toHertz :: float -> int -> int -> float
const toHertz = (absoluteCent, frequencyOfA4 = 440, precision = 7) => {
  const result = calculateFrequencyOfZeroCents(frequencyOfA4) * centRatio ** absoluteCent
  return roundToNDecimals(precision, result)
}

// fromHertz :: float -> int -> int -> float
const fromHertz = (frequency, frequencyOfA4 = 440, precision = 7) => {
  const result = getBaseLog(centRatio, frequency / calculateFrequencyOfZeroCents(frequencyOfA4))
  return roundToNDecimals(precision, result)
}

// fromSemitone :: int -> int
const fromSemitone = semitones => {
  return semitones * 100
}

// fromScientificNotation :: string -> int
const fromScientificNotation = note => {
  return fromSemitone(scientificNotationToSemitones(note))
}

export { toHertz, fromHertz, fromSemitone, fromScientificNotation }
