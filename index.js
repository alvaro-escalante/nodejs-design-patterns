import { FindRegex } from './finder.js'
import { resolve } from 'path'

const findRegexInstance = new FindRegex(/Hello \w+/g)

console.log('Excercice 3.1:')

findRegexInstance
  .addFile(resolve('assets', 'data.txt'))
  .addFile(resolve('assets', 'data.json'))
  .on('fileread', (file) => console.log(`\nFile ${file} being read...`))
  .on('found', (file, elem) => console.log(`Match "${elem}" in file ${file}`))
  .on('error', (err) => console.error(`Error emitted: ${err.message}`))
  .find()
