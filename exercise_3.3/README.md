
# Node.js Design Patterns Third Edition Exercise Solutions

---

**Exercise 3.4 - A simple modification**

---

## Explanation

The key thing here is the `process.nextTick()` method, as explained in the book. 

You can not call the `on` method from a function that returns an event emitter stright away, unless a `setInterval` or `setTimeout` it's used, basically relying on the next round of the event loop, so `process.nextTick()` is quite usefull here.

Using npm

```console
$ npm start_3_3
```

Using yarn:

```console
$ yarn start_3_3
```

