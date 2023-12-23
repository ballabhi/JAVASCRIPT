console.log("log")
console.info( "info")
console.warn("warn")
console.error(err)
console.assert( "err" != false)
console.assert("err" == false)
console.time()


console.time("forloop")

for(let i=0; i<5 ;i++){
    console.log(233)
}
console.timeEnd("forloop")

console.time("forloop")

console.log("whileloop")

let i=0;
while(i<5){
    console.log(233)
}
console.timeEnd("whileloop")