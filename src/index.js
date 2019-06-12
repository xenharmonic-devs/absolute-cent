import { roundToNDecimals, getBaseLog } from './math'
import { scientificNotationToMidiNote, calculateFrequencyOfZeroCents } from './helpers'
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

// fromMidiNote :: int -> int
const fromMidiNote = note => {
  return note * 100
}

// fromScientificNotation :: string -> int
const fromScientificNotation = note => {
  return fromMidiNote(scientificNotationToMidiNote(note))
}

export { toHertz, fromHertz, fromMidiNote, fromScientificNotation }
