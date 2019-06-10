import { curry, reduce, min, max } from 'ramda'

const nthRoot = curry((index, radicant) => {
  return Math.pow(radicant, 1 / index)
})

const roundToNDecimals = curry((decimals, number) => {
  const power = 10 ** decimals
  return Math.round(number * power) / power
})

const getBaseLog = curry((base, number) => {
  return Math.log(number) / Math.log(base)
})

const minAll = ([x, ...xs]) => reduce(min, x, xs)
const maxAll = ([x, ...xs]) => reduce(max, x, xs)

export { nthRoot, roundToNDecimals, getBaseLog, minAll, maxAll }
