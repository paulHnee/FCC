# JS3 - Travel Poll Program

A small in-memory poll that tracks options and unique voters.

## Run

1. Open the browser console or a Node.js REPL.
2. Paste the contents of script.js, or run it with Node.

## API

- addOption(option)
- vote(option, voterId)
- displayResults()

## Example

- addOption("Turkey")
- vote("Turkey", "traveler1")
- displayResults()

## Notes

- Each option stores a set of voters to prevent duplicates.
