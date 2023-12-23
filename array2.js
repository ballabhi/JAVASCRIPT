//  Array method

// 1)  .toString()

let num = [1,2,3,34,5]
let b = num.toString()
// 2) .join(" ") 

console.log(b , typeof b)
let c = num.join(" and ")
console.log(c , typeof c)

//3) .pop() pop out the last element in array 

// let r =num.pop() // pop retur the popped element 
// console.group(num ,r )

//4) push
//.push() pop out the last element in array 

// let r =num.push(56) // pop return the pushed element 
// console.group(num ,r )

//5)  .shift() --- > remove first elemnt  from start of arrayand return it 

// let r =num.shift() // 
// console.group(num ,r )

//6)  .unshift()

let r =num.unshift(78 ) // 
console.group(num ,r  ) // add  the element to the begining and return new array length 
