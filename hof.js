//hof: High Order Function: takes one or more functions as arguments and/or returns a function as its result.

const twice = (f, v) => f(f(v));
const add3 = v => v + 3;

console.log(twice(add3, 7));  // Result is 13

// this: 
//    const twice = (f, v) => f(f(v));
// is the same as:
      
      const add3 = v => v + 3;
      const twice = (f, v) => f(v);
      
      x = twice(add3, 7);   // 10
      y = twice(add3, x);   // 13
      
      console.log(y)  // 13

//********************************************************************//

const newArray = [1,2,3]

var x = newArray.map(Math.sqrt)
console.log(x)

// the map function is a callback function, it will invoke the function in every element of the array:
var y = newArray.map(e => e*e)
console.log(y)                      // 1, 2, 9

//********************************************************************//

function isOdd(e) {
  return e % 2 === 1;
}

const newArray2 = [1, 2, 3].filter(isOdd);
console.log(newArray2)

//********************************************************************//

function multiplyBy(a) {
  return multiplyBy.factor * a;
}

multiplyBy.factor = 5;

function host(func) {
  // do something with func
  return func;
}

const add = (a, b) => a + b;

const result = host(multiplyBy)(3)

console.log(result)     // 15

const result2 = host(add)(40, 2)
console.log(result2)    // 42
