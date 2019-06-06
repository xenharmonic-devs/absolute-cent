import { match, tail, toLower, is, test } from 'ramda'
import { semitonesByModifier, semitonesByKey, noteIndexOfA4, semitoneRatio } from './constants'

const scientificNotationToSemitones = note => {
  const pattern = /^([a-g])(x|#|bb|b|)(-1|\d)$/i

  if (!is(String, note) || !test(pattern, note)) {
    return null
  }

  const result = match(pattern, note)
  const [key, modifier, octave] = tail(result)
  return (parseInt(octave) + 1) * 12 + semitonesByKey[toLower(key)] + semitonesByModifier[modifier]
}

// calculateFrequencyOfZeroCents :: int -> float
const calculateFrequencyOfZeroCents = frequencyOfA4 => {
  return frequencyOfA4 / semitoneRatio ** noteIndexOfA4
}

export { scientificNotationToSemitones, calculateFrequencyOfZeroCents }
