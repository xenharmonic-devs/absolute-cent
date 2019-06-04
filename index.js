import { memoizeWith, toString } from 'ramda'
import { nthRoot, toNDecimals } from './helpers'

const calculateFrequencyOfZeroCents = memoizeWith(toString, a4 => {
  return a4 / nthRoot(12, 2) ** 69
})

const toHertz = memoizeWith(toString, (absoluteCent, frequencyOfA4 = 440, precision = 10) => {
  return toNDecimals(precision, calculateFrequencyOfZeroCents(frequencyOfA4) * nthRoot(1200, 2) ** absoluteCent)
})

export {
  calculateFrequencyOfZeroCents,
  toHertz
}
