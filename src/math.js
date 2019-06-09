import { curry } from 'ramda'

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

export { nthRoot, roundToNDecimals, getBaseLog }
