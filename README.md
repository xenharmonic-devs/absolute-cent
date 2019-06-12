# AbsoluteCent

## Glossary

`semitone` - relative value, divides an octave into 12 equal parts, 12th root of 2, https://en.wikipedia.org/wiki/Semitone

`midi note` - absolute value, a set of 128 uniq semitones, starting at C-1.

`cent` - relative value, divides a semitone into 100 parts, 1200th root of 2, https://en.wikipedia.org/wiki/Cent_(music)

`absolute cent` - absolute value, a uniq cent value assigned to every midi note, starting at C-1

`scientific notation` - https://en.wikipedia.org/wiki/Scientific_pitch_notation

## API

### AbsoluteCent

`toHertz (float absoluteCent[, int frequencyOfA4 = 440[, int precision = 7]])` - transforms an absolute cent to a
frequency value based on frequencyOfA4. precision is used for rounding result to a given number of decimals.

`fromHertz (float frequency[, int frequencyOfA4 = 440[, int precision = 7]])` - transforms a frequency to an absolute
cent value based on frequencyOfA4. precision is used for rounding result to a given number of decimals.

`fromMidiNote (MidiNote note)` - transforms a midi note to an absolute cent value

`fromScientificNotation (ScientificNotation note)` - transforms a string containing a note represented in scientific notation to
an absolute cent value

### Tuning

`parseTuning (Tuning tuning[, precision = 7])` - parses a tuning object and generates a list of absolute cent values.

`retune (float absoluteCent, Array tuningData)` - rounds the given absolute cent value to one of the values in the given tuning data

## Formats

### MidiNote

An integer between 0 and 127 representing midi pitches. 0 is the lowest, being equal to C-1, the highest is 127.

### ScientificNotation

A string containing a key, an optional modifier and an octave number.

`key` is an uppercase letter from `A` to `G`.

`modifier` can be one of the following strings: `#`, `x`, `b` or `bb`.

`octave` is an integer ranging from `-1` to `9`.

### Tuning

```json
{
  "anchor": [ <int>, <ScientificNotation> ],
  "pitches": <Array of floats>
}
```

The Tuning contains an anchor and a set of pitches.

The anchor consists of 2 values, where the 1st is an index pointing to any of the values in pitches, and the 2nd value
is a midi note to which that marked pitch is tuned. Having the anchor set to `[0, 'A4']` states, that the 1st value of
the pitches should be tuned to A4's value and other notes should be derived from that.

The set of pitches define a scale, where every pitch is defined as a cent. An example would be for 12 EDO:
`[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]`. This is similar to how you define a scale in
scala, but it has a few changes compared to that. First of all, every pitch needs to be defined as cents, ratios are not
calculated. Secondly, you need to explicitly set 0, it cannot be omitted. Finally, you don't need to place a `.` after a
pitch just to mark it as a float value, since javascript will treat it as a float even if you don't have any decimal
parts.
