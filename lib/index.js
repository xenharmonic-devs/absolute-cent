import { toHertz, fromHertz, fromMidiNote, fromScientificNotation } from '../src/index'
import { parseTuning, retune } from '../src/tuning'

const AbsolueCent = Object.freeze({
  toHertz,
  fromHertz,
  fromMidiNote,
  fromScientificNotation,
  Tuning: Object.freeze({
    parseTuning,
    retune
  })
})

export default AbsolueCent
export { toHertz, fromHertz, fromMidiNote, fromScientificNotation, parseTuning, retune }
