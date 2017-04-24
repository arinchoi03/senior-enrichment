// var array1 = [1,2,3,4,5]

// console.log(array1)

// var number = array1.pop();

// console.log(number)
// console.log(array1) // my array has been changed!

// example from Immutable.js website
const Immutable = require('immutable');

var map1 = Immutable.Map({
  a: 1,
  b: 2,
  c: 3
})

// console.log(map1) // prints out ==> Map { "a": 1, "b": 2, "c": 3 }

// map1[b] = 50 // this mutates the state

var map2 = map1.set('b', 50) // create new map with new value for b

console.log(map1) // yay your map1 still stays the same!
console.log(map2)
