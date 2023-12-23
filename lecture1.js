
// 1)                     word vs keyword 
// chacha 
// for 
// let aunty  if

// 2)                   var const let

// code me bhi value store krane ke liye jiski ause hota hai use khte he variabble

// var dulha = "lab";
// var dulhan = "labby";
// const dulha = "lab";
// const dulhan = "labby";

//3)                      hosting or   hoisting
//dono completely alg cheezhai
// hoisting  variableor function are hoisted which means
//there declaration is moved on the top of the code 
// console.log(a)
// var a = 12;
// undefined or not defined me fark he 

//4)                        types in js 
//-->  primitives = number ,string , null, undefined,boolean
//--> reference = [] () {}

// aisikoi bhi value jisko copy krne pr real copy ni hota, blki us main value ka reference ass hojaata hai use humrefernce value khte hai
//or jiska copy krne m real copy hojay bo primitive type kivalue hoti

// var a=12;
// var b=a;
// b= b+2;
// console.log(a)
// console.log(b)

// var c = [12,13]
// console.log(c)
// var d = c;
// d.pop()
// console.log(d)

// var a = [1,2,3,4,5]
// console.log(a)
// var b =a;
// b.pop();
// console.log(b)

// var acv = "fmfnkmkfmfkm";//primtive
// var abc = {}; // reference


//5)                     Conditionals  if else else if 

// if( 11>12){

// }
// else if (112>13){

// }
// else if ( 14>16){

// }
// else { 

// }


// 6)                       loops
// 111111111
// 123456789

// for ( var i=0;i<11; i++){
//     console.log(i);
// }

// for ( var i=25;i<51; i++){
//     console.log(i);
// }

//while loop

// var a = 12;

// while(a<20){
//     a++;
   
// }

//7)  functions 

// function helobolo() { 
//     console.log("hello baby ")
// }
// helobolo();


// //8) params and arguments 

// function abcd(a,b,c){
//     console.log(a,b,c);
// }
// abcd(12,13,14);

//argument = real value jo hum dete hai fnc chalatee wakt
//parameter = variable jinme value store hoti hai argument wali

// 8) Array
// let arr = [12,34,56,65,78];
// console.log(arr[0]);

//9) PUSH POP SHIFT UNSHIFT

// let  arr = [1,2,3,4,5,6,7];
// console.log(arr)
// arr.push(8);
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(0); // shuru me ek value join hojati hai 
// console.log(arr)
// arr.shift()
// console.log(arr)// shuru me value hat jati jai hai 

// arr.splice(2,3)
// console.log(arr)

// // 10)                                             object 
// //  ek se jada bande ki baat hua to array ek bande ke bare me sari baat krna ki bat ki to hua object 
// //object  ek bande ki sari detailsko holdkarna in  a key value pair 

// // 1)  blank object

// var a = {};

// // 2) filled object
// var a = { 
//     age: 24,
//      name  : " harsh",
//      email: "ballabhi3@gmail.com",
//      linkedin: "harshbghjn",
//      contact: 7974095166
// }


var ghadi= {
    brand  : "keneth cole",
    prive : "16k",
    color:"silver",
    type :  "automatic",
    digital: false,
    kuchbolo: function () {}
}

 ghadi.brand = "titan keneth cole"