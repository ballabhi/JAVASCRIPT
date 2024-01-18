// Primitives  datatype and object in javascript

//primitives datatypes their are 7 primitive datatypes in  javascript
// N = null
// N = Number
// S = Symbol
// S =String
// B = Boolean
// B= BigInt
// U= UNDEFINED 
//NON PRIMITIVES DATATYPES === OBJECT
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")

let f = Symbol("i am a nice symbol")
let g = undefined
let e ="harry"
console.log( a,b,c,d,f,g,e)

// to find which type of variable 

console.log( typeof  c)
console.log( typeof  d)

// non primitives datatypes ====== objects in javascript 

const item = {
    "harry": true,
    "shubh": false,
    "lovish" : 67,
    "rohan": undefined
}
console.log(item["lovish"])
console.log(item["harry"])
console.log(item["shubh"])
console.log(item["ro"])
