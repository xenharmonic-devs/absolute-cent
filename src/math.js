const nthRoot = (index, radicant) => {
  return Math.pow(radicant, 1 / index)
}

const toNDecimals = (decimals, number) => {
  const power = 10 ** decimals
  return Math.round(number * power) / power
}

const getBaseLog = (base, number) => {
  return Math.log(number) / Math.log(base)
}

export { nthRoot, toNDecimals, getBaseLog }
