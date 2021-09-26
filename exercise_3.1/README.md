
# Node.js Design Patterns Third Edition Exercise Solutions

---

**Exercise 3.1 - Simple Event**

---

## Explanation

My solution for this exercise is to use `fs/promises` which can be used with a trycatch block and as the book explains, you need to change the invokation for this to work as `async/await` does keep some sort of sequencial order simulating a synchronous approach.

Also I think the whole point of having the `this.emit('fileread', file)` was to be use on this excercises so I just kept that line where is at, as with `fs/promises` I don't need `process.nextTick()` and used that event as my `.on` method.


Using npm

```console
$ npm start_3_1
```

Using yarn:

```console
$ yarn start_3_1
```

