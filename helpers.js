import { memoizeWith, toString } from 'ramda'

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

export {
  nthRoot,
  toNDecimals,
  getBaseLog
}
