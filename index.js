import { memoizeWith, toString } from 'ramda'
import { nthRoot, toNDecimals, getBaseLog } from './helpers'

const semitoneRatio = nthRoot(12, 2)
const centRatio = nthRoot(1200, 2)
const noteIndexOfA4 = 69

const calculateFrequencyOfZeroCents = memoizeWith(toString, frequencyOfA4 => {
  return frequencyOfA4 / semitoneRatio ** noteIndexOfA4
})

const toHertz = memoizeWith(toString, (absoluteCent, frequencyOfA4 = 440, precision = 10) => {
  return toNDecimals(precision, calculateFrequencyOfZeroCents(frequencyOfA4) * centRatio ** absoluteCent)
})

const fromHertz = memoizeWith(toString, (frequency, frequencyOfA4 = 440, precision = 10) => {
  return toNDecimals(precision, getBaseLog(centRatio, frequency / calculateFrequencyOfZeroCents(frequencyOfA4)))
})

export {
  calculateFrequencyOfZeroCents,
  toHertz,
  fromHertz
}
