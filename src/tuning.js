import {
  last,
  map,
  compose,
  subtract,
  __,
  add,
  filter,
  gte,
  range,
  reduce,
  init,
  concat,
  lte,
  partition,
  has,
  lt,
  isNil
} from 'ramda'
import { roundToNDecimals, minAll, maxAll } from '../src/math'
import { highestNoteIndex } from './constants'
import { fromScientificNotation, fromMidiNote } from './index'

const parseTuning = (tuning, precision = 7) => {
  const {
    anchor: [index, note],
    pitches
  } = tuning

  const scaleRootCent = fromScientificNotation(note) - pitches[index]
  const scale = init(pitches)
  const scaleSize = last(pitches)
  const lowestRootCent = scaleRootCent % scaleSize
  const highestCent = fromMidiNote(highestNoteIndex)

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

const retune = (absoluteCent, tuningData) => {
  if (has(absoluteCent, tuningData)) {
    return absoluteCent
  }

  const [lesser, greater] = partition(lt(__, absoluteCent), tuningData)
  const prev = maxAll(lesser)
  const next = minAll(greater)
  if (isNil(prev)) {
    return next
  }
  if (isNil(next)) {
    return prev
  }
  if (absoluteCent - prev < next - absoluteCent) {
    return prev
  } else {
    return next
  }
}

export { parseTuning, retune }
