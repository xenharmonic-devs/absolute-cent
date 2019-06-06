import { memoizeWith, toString, match, tail, toLower } from 'ramda'
import { semitonesByModifier, semitonesByKey } from './constants'

const nthRoot = memoizeWith(toString, (index, radicant) => {
  return Math.pow(radicant, 1 / index)
})

const toNDecimals = memoizeWith(toString, (decimals, number) => {
  const power = 10 ** decimals
  return Math.round(number * power) / power
})

const getBaseLog = memoizeWith(toString, (base, number) => {
  return Math.log(number) / Math.log(base);
})

const scientificNotationToSemitones = memoizeWith(toString, note => {
  const pattern = /^([a-g])(x|#|bb|b|)(-1|\d)$/i

  if (!is(Sring, note) || !test(pattern, note)) {
    return null
  }

  const result = match(pattern, note)
  const [key, modifier, octave] = tail(result)
  return (parseInt(octave) + 1) * 12 + semitonesByKey[toLower(key)] + semitonesByModifier[modifier]
})

export {
  nthRoot,
  toNDecimals,
  getBaseLog,
  scientificNotationToSemitones
}
