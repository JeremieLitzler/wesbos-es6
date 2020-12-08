# Array improvements

## `.from()` and `.of()`

### `.from()`

It is useful when working with DOM elements.
A Nodelist is an array-ish and using `Array.from(nodelist)` return a true array.

`.from()` accepts a second argument that can take an arrow function. See `07 - An Array of Improvements/Array-from-and-of.html`.

### `.of()`

Nothing extraordinary about this one. See `07 - An Array of Improvements/Array-from-and-of.html`.

## `.find()` and ``.findIndex()`

### `.find()`

[See MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

### `.findIndex()`

[See MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex)

## `.some()` and `.every()` (Not ES6 but they are unused!)

### `.some()`

[See MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some)
**Note : Cette méthode renverra false, quelle que soit la condition, si elle est utilisée sur un tableau vide.**

### `.every()`

[See MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every)

**Note : Cette méthode renvoie true pour n'importe quelle condition utilisée sur un tableau vide.**
