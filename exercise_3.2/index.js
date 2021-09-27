import { EventEmitter } from 'events'

const tickGenerator = (num, callback) => {
  const emitter = new EventEmitter()
  let counter = 1
  const step = 50

  const recursiveTick = (num) => {
    if (num < step) {
      return callback(`All done, ${counter - 1} ticked event${counter > 1 ? 's' : ''}`)
    }

    setTimeout(() => {
      emitter.emit('tick', `${counter++} tick`)
      recursiveTick(num - step)
    }, step)
  }

  recursiveTick(num)

  return emitter
}

tickGenerator(500, (res) => console.log(res)).on('tick', (msn) => console.log(msn))
