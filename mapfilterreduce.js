// map tb use  krte hai jab hume nya array bnana ho
// foreach tb use krte hai j hume koi operation krna hota hai array ke existing elelment pr


let arr = [ 45,23,21]
let a = arr.map((value , index , array )=>{
    console.log(value ,index ,array)
    return value + 1
    return value + index
})
console.log(a)

//  array filter method 

let arr2=[45,23,21,0,3,5]
let a2= arr2.filter((a)=>{
    return a<25
})
console.log(a2)

// Array reduce method 

let arr3= [ 1,2,3,4,5,6]
let a3 = arr3.reduce((h1 , h2)=> {
return h1*h2;
}
) 
console.log(a3)

