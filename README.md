# absolute-cent

## notes

scientific notation: A4, C0, B#2

notes in scientific notation span from C0

MIDI notes start from **C-1** and there are a total of 128 semitones, where A4 is #69

frequency for scientific notation is derived from an anchor point: A4 = 440, A4 = 432

1 cent = 1/100 semitone

1 octave = 1200 semitone

n Hz + m semitone = n * (12th root 2) ^ m Hz

n Hz - m semitone = n / (12th root 2) ^ m Hz

A4 = 5 * octave + 9 semitone

C0 = 1 * octave + 0 semitone

C-1 = 0 * octave + 0 semitone

5 octave + 9 semitone = 5 * 12 semitone + 9 semitone = 69 semitone

C-1 = A4 - 69 semitone = 440 / (12th root 2) ^ 69 Hz = 8.1758… Hz

0 absolute cent = C-1 = 8.1758  Hz, if A4 = 440 Hz

## todos

* Add unit tests (needs babel)
* Parse tuning json files
