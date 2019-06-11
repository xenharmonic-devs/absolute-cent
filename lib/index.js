import { toHertz, fromHertz, fromSemitones, fromScientificNotation } from '../src/index'
import { parseTuning, retune } from '../src/tuning'

const AbsolueCent = Object.freeze({
  toHertz,
  fromHertz,
  fromSemitones,
  fromScientificNotation,
  Tuning: Object.freeze({
    parseTuning,
    retune
  })
})

export default AbsolueCent
export { toHertz, fromHertz, fromSemitones, fromScientificNotation, parseTuning, retune }
