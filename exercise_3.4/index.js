import { EventEmitter } from 'events'

const tickGenerator = (num, callback) => {
  const emitter = new EventEmitter()
  let counter = 1
  const step = 50

  const errorCaller = (caller) => new Error(`${caller}: Stop, it\'s divisible by 5`)

  process.nextTick(() => {
    if (Date.now() % 5 === 0) {
      emitter.emit('error', errorCaller('Emitter'))
      callback(errorCaller('Callback'))
    }
    emitter.emit('tick', `${counter} Tick`)
  })

  const tickRecursion = (num) => {
    if (Date.now() % 5 === 0) {
      emitter.emit('error', errorCaller('Emitter'))
      callback(errorCaller('Callback'))
    }
    if (num < step) {
      return callback(null, `All done ${counter} tick${counter > 1 ? 's' : ''} emitted`)
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

tickGenerator(450, (err, msn) => {
  if (err) throw err
  console.log(msn)
})
  .on('tick', console.log)
  .on('error', (err) => console.error(err))
