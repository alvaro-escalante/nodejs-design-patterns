import { EventEmitter } from 'events'
import { readFile } from 'fs/promises' // fs promises instead

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
        // Emit only if there is readeable content
        this.emit('fileread', file)

        // Emit only if regex matches content
        const match = content.match(this.regex)
        if (match) {
          match.forEach((elem) => this.emit('found', file, elem))
        }
        // Emit only if regex did not match content
        else {
          this.emit('notfound', file)
        }
      } catch (err) {
        // Emit only if there is an error reading
        this.emit('error', err)
      }
    }

    console.log('\n')

    return this
  }
}
