
# Node.js Design Patterns Third Edition Exercise Solutions

---

**Exercise 3.4 - Playing with errors**

---

## Explanation

On this exersise to emit the event and the callback immediately, I put both on the `process.nextTick()` method. Otherwise the callback will stop the script – Since we are throwing the error, and then I kept the error event as `console.err`

I am used to seeing the errors on a callback to be throwable, so I created a `new Error` that I can throw on the actual callback invocation.

I also made a little helper function `errorCaller` to indicate who is creating the error.


Using npm

```console
$ npm start_3_4
```

Using yarn:

```console
$ yarn start_3_4
```

