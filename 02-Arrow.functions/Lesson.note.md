# Arrow functions & Default arguments

## Arrow functions

### Anonymous

All arrow functions are anonymous.

### Scope of `this`

It is not always good to use arrow functions in all situations.

#### Example of an event listener.

Using an arrow function here would mean that `this` is scoped to the parent = window!

```js
const box = document.querySelector(".box");
box.addEventListener("click", () => {
  console.log(this); //the window... we don't want that!
  //handle event...
});
```

```js
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  console.log(this); //the box
  //handle event...
});
```

Similarly, using the regular function in the `setTimeout` within the event handler will scope `this` to the window.

```js
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let first = "opening";
  let second = "open";

  if (this.classList.contains(first)) {
    [first, second] = [second, first];
  }

  this.classList.toggle(first);
  setTimeout(function () {
    console.log(this);
    this.classList.toggle(second);
  }, 500);
});
```

However, `this` inside the `setTimeout` should be the instance of the box variable, not the windows.
Using an arrow function helps to solve the scope issue.

```js
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let first = "opening";
  let second = "open";

  if (this.classList.contains(first)) {
    [first, second] = [second, first];
  }

  this.classList.toggle(first);
  setTimeout(() => {
    console.log(this);
    this.classList.toggle(second);
  }, 500);
});
```

Before, we would have done the following:

```js
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  var that = this; //save the box instance...
  let first = "opening";
  let second = "open";

  if (this.classList.contains(first)) {
    [first, second] = [second, first];
  }

  this.classList.toggle(first);
  setTimeout(function () {
    console.log(that); //... to use it here!
    that.classList.toggle(second);
  }, 500);
});
```

### When not to use the arrow functions

1. When you really need `this`
2. When you need a method to bind to an object
3. When you need to add a prototype method
4. When you need arguments object

## Default arguments

Similar to C# except you don't specify the type ;) TypeScript?

See [02 - Arrow functions/default-arguments.html](02%20-%20Arrow%20functions/default-arguments.html)
