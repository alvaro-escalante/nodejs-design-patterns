import { EventEmitter } from 'events'

const tickGenerator = (num, callback) => {
  const emitter = new EventEmitter()
  let counter = 1
  const step = 50

  process.nextTick(() => emitter.emit('tick', `${counter} Tick`))

  const tickRecursion = (num) => {
    if (num < step) {
      return callback(`All done ${counter} tick${counter > 1 ? 's' : ''} emitted`)
    }

    setTimeout(() => {
      counter++
      emitter.emit('tick', `${counter} Tick`)
      tickRecursion(num - step)
    }, step)
  }

  tickRecursion(num)

  return emitter
}

tickGenerator(450, (msn) => console.log(msn)).on('tick', (msn) => console.log(msn))
