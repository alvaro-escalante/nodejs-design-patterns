import { FindRegex } from './finder.js'
import { basename } from 'path'
import { stdout } from 'process'

console.log('Exercise 3.1:')

const findRegexInstance = new FindRegex(/Hello \w+/g)

findRegexInstance
  .addFile('../assets/data.txt')
  .addFile('../assets/data.json')
  .addFile('../assets/data.js')
  .on('fileread', (file) => stdout.write(`\nReading ${basename(file)} file `))
  .on('found', (file, elem) =>
    stdout.write(`=> Matched "${elem}" in ${basename(file)} file`)
  )
  .on('notfound', (file) => stdout.write(`=> Not found on ${basename(file)} file`))
  .on('error', (err) => console.error(`Error emitted: ${err.message}`))
  .find()
