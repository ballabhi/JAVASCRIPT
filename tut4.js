    let a =prompt("hey whats your age?")
a = Number.parseInt(a)          // converting thestring to number
console.log(typeof a)
if(a>0){
    console.log(" this is a valid age");// browser function 
}

else if(a<9){
    console.log("you r kidyou cannot even think of driving");
}
else if( a<18 && a>=9){
    console.log(" you are kid and u can think of driving after 18");
}
else{
console.log("this is invalid age");



}
// turnary 
 // homework - explore switch statement and write a basicprogram in comments
 console.log( a<18 ? "notdrive" : "drive");