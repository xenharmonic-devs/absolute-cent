import { toHertz, fromHertz, fromSemitone, fromScientificNotation } from '../src/index'
import { parseTuning, retune } from '../src/tuning'

const AbsolueCent = Object.freeze({
  toHertz,
  fromHertz,
  fromSemitone,
  fromScientificNotation,
  Tuning: Object.freeze({
    parseTuning,
    retune
  })
})

export default AbsolueCent
export { toHertz, fromHertz, fromSemitone, fromScientificNotation, parseTuning, retune }
