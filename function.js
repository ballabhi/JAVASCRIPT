function onePlusAvg( x,y){
    
    // return (1  + (x + y)/2+4)
// in oeder to get round off value we used Math.round function
return Math.round(1  + (x + y)/2+4) 
}
let a=3;
let b=4;
let c=5;

console.log(" one plus average of a and b is :" ,onePlusAvg(a,b) )
console.log(" one plus average of b and c is :" ,onePlusAvg(b,c) )
console.log(" one plus average of c and a is :" ,onePlusAvg(c,a) )


// alternative methord 
const product = (p,q)=> {
return p*q;
}
console.log(product(9,6));

//bina agrument pass kiye bhi function bna skte hai javascript me 
const hello =()=> {
   console.log(" hey ballabhi is good girl she is very friendly with everyone")
return " hyyyy  " ;
}

 let v = hello();
 console.log(v);
hello();


const sum =(a,b)=>{
    return 7*a+8*b;

}

console.log(sum(4,5));