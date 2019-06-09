import { last, map, compose, subtract, __, add, filter, gte, range, reduce, init, concat, lte } from 'ramda'
import { roundToNDecimals } from '../src/math'
import { highestNoteIndex } from './constants'
import { fromScientificNotation, fromSemitones } from './index'

const parseTuning = (tuning, precision = 7) => {
  const {
    anchor: [index, note],
    pitches
  } = tuning

  const scaleRootCent = fromScientificNotation(note) - pitches[index]
  const scale = init(pitches)
  const scaleSize = last(pitches)
  const lowestRootCent = scaleRootCent % scaleSize
  const highestCent = fromSemitones(highestNoteIndex)

  const lowerIncompleteScale =
    lowestRootCent === 0
      ? []
      : compose(
          filter(gte(__, 0)),
          map(
            compose(
              add(__, lowestRootCent),
              subtract(__, scaleSize)
            )
          )
        )(scale)

  const fittingScaleAmount = Math.floor((highestCent - lowestRootCent) / scaleSize)

  const fullScales = reduce(
    (acc, index) => {
      const baseCent = lowestRootCent + index * scaleSize
      return concat(acc, map(add(baseCent), scale))
    },
    [],
    range(0, fittingScaleAmount)
  )

  const highestRootCent = lowestRootCent + fittingScaleAmount * scaleSize

  // TODO: under what condition do we get an empty arrays as response?
  const upperIncompleteScale = filter(lte(__, highestCent), map(add(highestRootCent), pitches))

  return map(roundToNDecimals(precision), [...lowerIncompleteScale, ...fullScales, ...upperIncompleteScale])
}

export { parseTuning }
