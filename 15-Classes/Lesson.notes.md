# Classes

## Prototypal Inheritance: a Recap

A Prototypal inheritance is the fact that every method available in an object is available to all instances of that object.

See [15-Classes/inheritance-review.html](inheritance-review.html)

## The ES6 way

- **No comma when declaring several methods!!**
- **A static method can be accessed only via the source class.**

See [15-Classes/classes-FINISHED.html](classes-FINISHED.html)

## Extending a class

This is standard [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) for JavaScript.

Yet, is it really necessary to use?
Is it the same as other OOP-enabled language like C# or Java? [No, it isn't!](https://medium.com/@vapurrmaid/should-you-use-classes-in-javascript-82f3b3df6195).

> Ultimately, if one finds they have to write ‘hacks’ or fight with their tools to force a feature, it should be questioned whether or not there is other ways to achieve a similar level of expression. Forcing JavaScript to look like another language may seem ‘desirable’ from a naive viewpoint, but will not help in long term maintenance. **In other words, value expressiveness over [dogma](https://www.merriam-webster.com/dictionary/dogma)** (principle, belief or point of view put forth as authoritative without adequate grounds).

So, depending on your use cases, we will use JavaScript classes or not.

The way Prototypal Inheritance works hasn't changed. But the syntax has evolved.
