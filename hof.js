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
//
const newArray = [1,2,3]

var x = newArray.map(Math.sqrt)
console.log(x)

var y = newArray.map(e => e*e)
console.log(y)                      // 1, 2, 9
