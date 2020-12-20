# Spread and Rest operators

[< Back to table of content](../README.md) |
[View previous lesson's notes](../07-An.Array.of.Improvements/Lesson.notes.md) |
[View next lesson's notes >](../09-Object.Literal.Upgrades/Lesson.notes.md)

## Spread

### Syntax

```js
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...specialty];
```

### Copying arrays

```js
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas]; //true copy of pizzas
const pizzas = fridayPizzas; //reference copy of pizzas so if modify one, the other is updated!
```

### Spreading in a function

```js
const name = ['Wes', 'Bos'];

function sayHi(first, last) {
  alert(`Hey there ${first} ${last}`);
}

sayHi(...name); //alerts "Hey there Wes Bos"
```

## Rest

[Look at the example](08%20-%20Hello%20to%20...Spread%20and%20...Rest/rest-params.html)
