import { EventEmitter } from 'events'
import { readFile } from 'fs/promises'

export class FindRegex extends EventEmitter {
  constructor(regex) {
    super()
    this.regex = regex
    this.files = []
  }

  addFile(file) {
    this.files.push(file)
    return this
  }

  async find() {
    for (const file of this.files) {
      try {
        const content = await readFile(file, 'utf8')
        this.emit('fileread', file)

        const match = content.match(this.regex)
        if (match) {
          match.forEach((elem) => this.emit('found', file, elem))
        }
      } catch (err) {
        this.emit('error', err)
      }
    }

    return this
  }
}
