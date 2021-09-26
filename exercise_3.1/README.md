
# Node.js Design Patterns Third Edition Exercise Solutions

---

**Exercise 3.1 - Simple Event**

---

## Explanation

My solution for this exercise is to use `fs/promises` which can be used with a `try / catch` block as `async/await` does keep some sort of sequencial order simulating a synchronous approach and as the book explains, you need to change the invokation of `find()` to last, for this to work.

I think the whole point of the `this.emit('fileread', file)` was to be use on this exercise, so I just kept that line where is as. With `fs/promises` I don't need `process.nextTick()` so I used the provided event as it is on my `.on` method.

I have also added a data file that does not contain a regex match with an `event` for it and changed to `process.stdout.write` instead of `console.log` to print in one line.

Using npm

```console
$ npm start_3_1
```

Using yarn:

```console
$ yarn start_3_1
```

