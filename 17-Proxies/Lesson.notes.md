# Proxies

They allow to overwrite the default behavior of an object.

> To effectively implement and use an ES6 proxy, you must understand three key terms:
>
> - Target — The real deal that the proxy is substituting, the target is what stands behind the proxy. This can be any object
> - Handler — An object that contains the logic of all the proxy’s traps
> - Trap — Similar to traps in operating systems, traps in this context are methods that provide access to the object in a certain way
>
> Source: [logrocket](https://blog.logrocket.com/practical-use-cases-for-javascript-es6-proxies/)

The usecase of [17-Proxies/proxies-case-safety](17-Proxies/proxies-case-safety.html) is pretty neat to show how we can safeguard the developers from manipulating inexistant properties in an object.

Another usecase is the caching.

However:

> ES6 proxies are not ideal for performance-intensive tasks. That’s why it’s crucial to perform the necessary testing. A proxy can be used wherever an object is expected, and the complex functionality that proxies provide with just a few lines of code makes it an ideal feature for metaprogramming (ex: [reflection in C#](https://stackoverflow.com/a/514697/13446264) but [also more](https://stackoverflow.com/a/42220709/13446264)).
