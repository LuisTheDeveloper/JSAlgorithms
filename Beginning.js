//
function addArgs(){
  let a = 0

  for(let i = 0; i<arguments.length;i++){
    a += arguments[i]
  }
  console.log(a)
}

function multArgs(){
  let a = 1

  for(let i = 0;i<arguments.length;i++){
    a *= arguments[i]
  }
  console.log(a)
}
addArgs(2,3,5)
multArgs(4,5,6)
