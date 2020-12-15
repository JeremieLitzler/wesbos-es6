# Maps and WeakMaps

## Maps

On maps, we can use `forEach` and `for..of`.

With `for... of`, each value of a map is an actual array:
So therefore, this

```js
for (const dog of dogs) {
  //...
}
```

is the same as :

```js
for (const [key, val] of dogs) {
  //we destructure the array to view the key and value of the map value.
  //...
}
```

With a map, you can use for the key of a value an object.
See [the example](maps-metadata.html) where we are storing metadata of the NodeList of button.
The key remains the same but the value can be anything to extend the object as key.

## WeakMaps

It is the differences between the Sets and WeakSets but here between Maps and WeakMaps.
