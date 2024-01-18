// const student = {
//     fullName:"Rahul kumar",
//     age: 20,
//     cgpa:8.2,
//     ispass : true,
// };
// student["age"] = student["age"]+5;
// console.log(student.cgpa)
// console.log(student.age)

// const name = "rahul";
// name =" sachin"                    // Error

// UN=NARY OPERATOR 
// let a= 5 ;
// let b=2;

// console.log( " a = " , a," & b = ", b) 
// console.log("a++ = ", a++);
// console.log("a = ", a);
// console.log("--a = ", --a);
// console.log("a = ", a);
// console.log("a-- = ", a--);
// console.log("a = ", a);

//assignment operator 

// let  a=5;
// let b=2;
// a**=4;
// console.log("a = " , a )

//comparision operator 

// let  a=5;
// let b="5";

// console.log(" 5==5 " , a == b);
// console.log(" 5===5 " , a === b);
// console.log(" 5!==5 " , a !== b);


// // logical operators
// let a = 6;
// let b = 5;

// let cond1 = a<b; //false
// let cond2 = a===6;
// console.log( "cond1 && cond2 = "  , cond1&& cond2)
// console.log( "!(6<5) = " , !(a  === 6 ));




// conditionals Statement 


// let mode = "dark";
// let color;

// if(mode==="dark"){
//     color="black";

// }
// else
// {
//     color="white";
// }
// console.log(color);

//  let score = prompt(" enter your score (0-100 ) :")
//  let grades;

//  if(score>=90 && score<=100){
//     grades="A";
//  }
//  else if(score>=70 && score<=89){
//     grades="B";
//  }
//  else if(score>=60 && score<=69){
//     grades="C";
//  }
//  else if(score>=50 && score<=59){
//     grades="D";
//  }
//  else{
//     grades="F";
//  }
//  console.log(grades)

 //         for-of loop 
  
//  let str = "ApnaCollage";
// for( let i of str){
//     console.log("i=" , i)
// }

// let str = "Javascript";

// let size = 0 ;
// for(let i of str ){
//     console.log("i=" , i);
//     // size++;
// }

// console.log("string size = ", size);

//for in loop 

// let  student = { 
//     name: "rahul kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true,
// };

// for ( let key in student){
// console.log("key=",key, " value =", student[key]);

// }

// print all no from 0 to 100
// for(let n=0; n<=100;n++){
// if( n%2==0){
//     console.log("print done ")
// }
// else{
//     console.log("dont print")
// }
//}
// create  agame where you start wiletth any random number game number ask the user to keep guessing the game numnber untill the user enters correct values 

// let gamenum=45;
// let usernum = prompt(" guess the Number :");


// while(gamenum !=  usernum){
//     usernum = prompt("you have entered wrong number .guess again");

// }

// console.log("congratulation , you have entered right number")

//strings 

// let str = "apna college";
// let str2 = "shradaa";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[600000]);


//tempate  literals 


// let obj= { 
//     item: " pen",
//     price:  10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupeee  `;
// console.log(output);

// console.log("the cost of " ,obj.item ,  " is " , obj.price, "rupees" )


// let specialstring = `this is a template literal ${1+2+3}`;
// console.log(typeof specialstring);

//escape character \n

// strings methods 


// let name = "ballabhi\n rawat";
// console.log(name.length
//     )

//     let name = "ballabhi\n rawat";
//     console.log(name.toUpperCase()
//         )




//         let name2 = "         ballabhi\n rawat  jhbb" ;
//         console.log(name2.trim()
//             )




//             let str1 = "naina";
//             let str3= "rawat";
//             let res= str1.concat(str3);
//             console.log(res)

//             let str4 = "hello dear darling"
//             console.log(str4.replace("l" , "y"))


// let str5= " i love js ";
// console.log(str.charAt(2));
// console.log(str.charAt(6));
// console.log(str.charAt(7));
// console.log(str.charAt(4));
// console.log(str.charAt(11));


// Q3:-  
// let fullName  = prompt("Enter your full name without spaces ");
// let username = "@"+ fullName+ fullName.length;
// console.log(username);


//                     Array

// let marks = [ 97 ,82,75,64,36];

// console.log(marks)
// marks[3]=45;
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[4])
// console.log(marks[23])
// console.log(marks)
 
// string immutable hoti he  kisi particular index pe jake  iski 
// value save ni kr skte 


// let heroes =[ "ironman ", "thor" , "hulk" , "shaktiman","spiderman"]
// for loop

// for(let i=0 ; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// for of

// for(let hero of heroes){
//     console.log(hero);

// }
// let sum=0 ;
// let avg;
// let marks =  [85,97,44,37,76,60];
// for( let i=0 ; i<marks.length ; i++){
// sum= sum + marks[i];
// avg = sum/(marks.length)
// }
// console.log("the avg marks of a student: " ,avg)



// let items  = [250,645,300,900 ,50];

// let idx = 0;
// for ( let val of items){
//     console.log(`value at index ${idx} = ${val}`);
// }




// let items = [250,645,300 , 900 , 50];
// let i=0;
// for(let val of items2){
//     let offer = val /10;
//     items2[i] = items2[i] - offer;
//     console.log(`valueafter offer = ${items2[i]}`);
//     i++;
// }
// console.log(items2);

// for( let i = 0; i < items.length ;i++ ){
//     let offer  = items[i]/10;
//     items[i] -=offer;

// }
// console.log(items);


// Arrays method

// let veggies = [ "potato","apple" , "tomamto", "litchi"]
// console.log(veggies)
// veggies.push("chips")
// veggies.pop()
// console.log(veggies)

// console.log(veggies);
// console.log(veggies.toString()); 

// //             FUNCTIONS

// function myFunction(){
//     console.log("welcome to apna college !");
//     console.log("we areplanning to learn Js");
//     console.log("welcome to apna college !");
//     console.log("we areplanning to learn Js");
// }
// myFunction();


// function myFunction(msg){
//     console.log(msg);
//     console.log(msg);
//     console.log(msg);
//     console.log(msg);
// }
// myFunction(" ilove js  Js", 100);

// function sum(x,y){

//     console.log(x  + y);
// }



// function sum(x,y){
//     s = x+y;
//     return s;
// }
// let val =sum(5,6);
// console.log(val);

// //for  parameters  -> like local variable of fun

// // arrow function:-

// const arrowMul = (a,b)=> {
//     console.log(a*b);
// };

// const printhello = ()=>{
//     console.log("hello");
// }

//q4) 

// function countvowels(str){
//     let count =0;
//     for(const char of str ){
//         if(char === "a" || char==="e" || char ==="i" || char==="o"||char==="u"){
//             count++;
//     }
// }
// console.log(count);
// }


//q4)
// const countvowels = (str)=>{
//     let count =0;
//     for(const char of str ){
//         if(char === "a" || char==="e" || char ==="i" || char==="o"||char==="u"){
//             count++;
//     }
// }
// return count;
// };


// //  for each loops  normally calculation ke liye use hota hai 

// let arr =["pune ", "delhi","mumbai"];
// arr.forEach((val , idx ,arr )=> {
//     console.log(val.toUpperCase(),idx,arr);
// });

//higher order function / methods

// function as a parameter 
// function return krra ho

// let arr = [1,2,3,4,5];
// arr.forEach ((value) =>{
//     console.log( value*value);
// })


// //==================    Array  MAP METHODS==========================================================================
// // mapuse hota hai jb value ko use krke nya array create krna ho
// let nums =[67,52,39];
//  let newarr = nums.map((val)=>{
// return  val*5;
// });
// console.log(newarr);

// let arr3 = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val)=> {
//     return val>3;
// });
// console.log(evenArr);


// let arr =[5,6,2,1,30];
// const output = arr.reduce( (prev , curr) =>{
// return prev>curr ? prev : curr; 
// });
// console.log(output);


// q5:- 

// let marks = [ 97, 64,32,49 ,99 ,86];

// let res =  marks .filter((val)=>{
//     return val>90;
// })
// console.log(res)

//q6;- 

// let n = prompt("enter a number : ");
// let arr = [];
// for ( let i=1; i<=n ; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

//q7

// let arr = [23,34,45,56,75,67];

// let sum  = arr.reduce(( res,curr) =>{
//     return res + curr;
// });
// console.log(sum);


//q8
// let arr = [23,34,45,56,75,67];

// let sum  = arr.reduce(( res,curr) =>{
//     return res * curr;
// });
// console.log(sum);

// =========================================================================================================================================================================================
// ======================================================================================================================================
// ==========================================================================================
// =======================================================================================================
 

//       DOM  MANIPULATION  

// console.dir(document.body.childNodes[1]);

// selecting with id 
// syntax:----------------------------------
//document.getElementById("my id")

// let button = document.getElementById("myid");
// console.dir(button);

// // selecting with class 

// let headings = document.getElementsByClassName("myclass");
// console.log( headings);

// // selecting with tag

// let paragarph = document.getElementsByTagName("p");
//     console.dir(paragarph);


//     // query selector

//     let firstelements = document.querySelector("p");
//     console.dir(firstelements);
//     let  allelements = document.querySelectorAll("p");
//     console.dir(allelements);

    
//     let firstelements2 = document.querySelector(".myclass");
//     console.dir(firstelements2);
//     let  allelements2 = document.querySelectorAll(".myclass");
//     console.dir(allelements2);

    
//     let firstelements3 = document.querySelector("#myid");
//     console.dir(firstelements3);

// console.dir(document.body.firstChild);
// document.querySelector("div").children;

// let div = document.querySelector("div");
// console.dir(div);


// let heading = document.querySelector("h1");







// practise question

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from apna college student";


//q2:-

// let div = document.querySelector("div");
// console.log("div");


// // Get attributes

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// set attributes:-

// let div = document.querySelector("div");
// div.style.backgroundcolor = "green";
// div.style.backgroundcolor = "purple";
// div.style.fontsize = "26px";
// div.style.fontsize = "26px";



//dom manipulation -

// Insert elements  

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me ";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);


// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);
 
// let div = document.querySelector("div");
// div.after(newBtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML= "<i> Hi , I am new!</i> "
// document.querySelector("body").prepend(newheading);


// let para = document.querySelector("p");
// para.remove();

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";

// newbtn.style.color = "white";
// newbtn.style.backgroundColor= "red";

// document.querySelector("body").prepend(newbtn);

// //q2:- ========================================================
// let para = document.querySelector("p");

// ======================================================================================
// ==============================================================

// =======================================================================================
// =========================================================================


// EVENTS IN JAVASCRIPT

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
//  console.log(a);
// }

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX , evt.clickY);
// };


// let div = document.querySelector("div");
// div.onmouseover= (evt) => {
//     console.log("you are indise div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX , evt.clickY);
// }


// event listerners


// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler1");
// })


// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler2");
// })

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler3");
// })

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler4");
// })

// // 2) removal

// btn1.removeEventListener("click", () => {
//     console.log("btn1 was clicked - handler3");
// })


// oues

let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click" ,() =>{
    if(currmode == "light"){
currmode = "dark";
document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = " light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    
console.log(currmode);
});
