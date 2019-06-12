import { parseTuning, retune, toHertz, fromScientificNotation } from '../lib'

const generateNEdo = n => {
  const tuning = []

  for (let i = 0; i <= 1200; i += 1200 / n) {
    tuning.push(i)
  }

  return tuning
}

const renderSong = notes => {
  return notes.map(note => toHertz(note, 440, 2))
}

const _19edo = {
  anchor: [0, 'C4'],
  pitches: generateNEdo(19)
}

const scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'].map(fromScientificNotation)

const tuningData = parseTuning(_19edo)
const retunedScale = scale.map(note => retune(note, tuningData))

console.log('12edo:', renderSong(scale)) //        12edo: [ 261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25 ]
console.log('19edo:', renderSong(retunedScale)) // 19edo: [ 261.63, 291.88, 325.64, 350.29, 390.81, 436.01, 486.43, 523.25 ]
