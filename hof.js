//hof: High Order Function: takes one or more functions as arguments and/or returns a function as its result.
// also known as callback functions

//********************************************************************//
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

//********************************************************************//

let x = function(){
  console.log("Being called inside x function")
};

let y = function(callback){
  console.log("inside y function");
  callback();
}
y(x)

//********************************************************************//

// Make this function as most abstract as possible:

let calc = function(num1, num2, calctype) {
  if (calctype === "add") {
    return num1 + num2;
  } else if (calctype === "mult") {
    return num1 * num2;
  }
};
var result = calc(2,3,"mult");
console.log(result);

// Alternative approach:
let add = function(a,b){
  return a+b
};

let multiply = function(a,b){
  return a*b
};

const calc = function(num1,num2,callback){
  if (typeof callback === "function") {
    return callback(num1, num2)
  }
    return "Non Function"
}

const showNumbers = function(a,b){
  let result = `here are the two numbers passed: ${a}, ${b}`;
  return result
  
}

//console.log(calc2(2,3,multiply))
result = calc(2,3,showNumbers);
console.log(result);

// Another approach:

console.log(calc(2,3,function(a,b) {return console.log(`a= ${a} b=${b}`) }))

//********************************************************************//

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

// function that returns a function that returns a function
function calculator() {
  function doOperation() {
    function doAdd() {
      function increment(){}
        return increment;
    }
    return doAdd;
  }

  return doOperation;
}

assert(typeof calculator()() === 'function');
assert(typeof calculator()()() === 'function');

//********************************************************************//

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

const calc = function(operation, operand) {
 let total = 0;
  const doOperation = function(operation, operand) {
    console.log(operand)
    total = operation(total, operand)
    return total;
  }
  total = doOperation(operation, doOperation(operation,operand))
  return total;
}

console.log(calc(add,3))

//********************************************************************//
