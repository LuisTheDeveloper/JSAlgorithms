//JS - Algorithms

//addArgs: suming an unknown numbers and displaying the result to the console.
function addArgs(){
  let a = 0

  for(let i = 0; i<arguments.length;i++){
    a += arguments[i]
  }
  console.log(a)
}

//addArgs: multiplying an unknown numbers and displaying the result to the console.
function multArgs(){
  let a = 1

  for(let i = 0;i<arguments.length;i++){
    a *= arguments[i]
  }
  console.log(a)
}

// adding numbers:
addArgs(2,3,5)

// multiplying numbers:
multArgs(4,5,6)
