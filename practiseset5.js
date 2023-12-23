// chapter 5 practise set 
// question 1

// let arr = [1,2,3,4,5,6,7,53]
// let a = prompt(" Enterthe number ")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// question 2

// let arr = [12,34,54,33,34,54432,5443,4343]
// let a;
// do {
//  a = prompt("enter  the number ")
//     a = Number.parseInt(a)
//     arr.push(a)
// } while(a != 0)
// console.log(arr)

// question 3

// let arr2=[450,23,210,60,30,55 ,70,80,34,210]
// let a2= arr2.filter((a)=>{
//     return a%10==0
// })
// console.log(a2)

// question 4:-==============================================================================================================


// let arr3= [ 10,43,6,8,7,6,5,34,5,4,5,9]
// let a3 = arr3.map((value)=>{
// return value * value
// })
// console.log(a3)

//ques 5:-  =========================================================================================================

let arr3= [ 10,43,6,8,7,6,5,34,5,4,5,9]
let a3 = arr3.reduce((h1 , h2)=>{
return h1*h2
})
console.log(a3)


