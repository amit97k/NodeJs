var module_require = require('./module_require');
console.log(module_require.counter(['a','b','c',1,2,3]));
console.log(module_require.adder(3,5));
console.log(module_require.adder(module_require.pi,5));

