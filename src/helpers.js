import { memoizeWith, toString, match, tail, toLower } from 'ramda'
import { semitonesByModifier, semitonesByKey, noteIndexOfA4 } from './constants'

const scientificNotationToSemitones = memoizeWith(toString, note => {
  const pattern = /^([a-g])(x|#|bb|b|)(-1|\d)$/i

  if (!is(Sring, note) || !test(pattern, note)) {
    return null
  }

  const result = match(pattern, note)
  const [key, modifier, octave] = tail(result)
  return (parseInt(octave) + 1) * 12 + semitonesByKey[toLower(key)] + semitonesByModifier[modifier]
})

// calculateFrequencyOfZeroCents :: int -> float
const calculateFrequencyOfZeroCents = memoizeWith(toString, frequencyOfA4 => {
  return frequencyOfA4 / semitoneRatio ** noteIndexOfA4
})

export {
  scientificNotationToSemitones,
  calculateFrequencyOfZeroCents
}
