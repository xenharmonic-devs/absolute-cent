import { memoizeWith, toString, match, tail, toLower } from 'ramda'

const keys = {
  a: 9,
  b: 11,
  c: 0,
  d: 2,
  e: 4,
  f: 5,
  g: 7
}
const modifiers = {
  x: 2,
  '#': 1,
  '': 0,
  b: -1,
  bb: -2
}

const nthRoot = memoizeWith(toString, (index, radicant) => {
  return Math.pow(radicant, 1 / index)
})

const toNDecimals = memoizeWith(toString, (decimals, number) => {
  const precisor = 10 ** decimals
  return Math.round(number * precisor) / precisor
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
  return (parseInt(octave) + 1) * 12 + keys[toLower(key)] + modifiers[modifier]
})

export {
  nthRoot,
  toNDecimals,
  getBaseLog,
  scientificNotationToSemitones
}
