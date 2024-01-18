// the differnece between var let const -----------------------------------------------------
// var old js me tha 
// varfunction scoped hota hai = > var apne parent func mein kbhi bhi use ho skta hai
// var adds itself to the window object

// function abcd(){
//     for(var i =1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();
 
// var a = 12;

// let const new js mein hai ---------------------------------------------------------------
// let braces scoped hota hai
// let const doesn't adds // let b=12;*** add ni krega window 

// var
//  b = 12;
// function abcd(){
//     for(let i =1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();

// javascript language me kuch chize nahi hai jo hum use krte
//  hai or bo chize hume js se nahi blki broswer se milti hai esi 
//  sare features jo js ka part ni he but fr bhi um use kr skte hai unhe hum 
//  dur skte h ek particular object me jiska name hai "Window"

// JS MEI SAARE FEATURES HAI PAR KUCH FEATUREJO HUM USE KRTE HAI WO NAHI HAI PAR FIR 
// BHI USE KRPATE HAI KYOKI BO FEATURE JS LANGUAGE USE KAR ETI HAI WINDOW SE AUR WINDOW HAI EK
// EK BOX OF FEATURES GIVEN BY BROSWER TO USE WITH JS .

// Alert Promt Console


//                       browser context API -----------------------------------------------

// 1)  STACK 

//2)  HEAP MEMORY :-
//Jitne bhi variables ya data hum banate hai unhe store kahi to karna pdta hai uske liye 
//hota hai Heap memory 



//         EXECUTION CONTEXT------------------------------------------------------------

// execution context ka matlab jab bhi hum function chalayege func apna ek khudka ek
//imaginary container bna lega jismein tin cheeje hogi : 
// 1) variables
//2) function inside that parent function 
//3) lexical enviroment of that function
//ye jo container hai imaginay hai ise hi humexecution context khte hai


// function abcd(){
//     var a=12;
//     function def(){
//         var b=12;
//     }
// }

// execution context is a container where the function's code is exceuted and it's 
// created whenever a function is called , it contain 3 things,variables , function  AND lexical
//envirment

// lexical envirment hota hai ek chart jisme ye likha hota hai ke aapka particular function kin
//chijo ko acess kr skta hai and kinko nai ,matlab it holds it's scope and scope chain 




//                                         how to copy refernce values 

// var f=[1,2,3,4,5];

// var z=f;

// z.pop(); // copying problem 

//To overcome the solution of the Problem by spread operator


// var a = [ 1,2,3,4,5];
// var b = [...a]
// b.pop();

// var obj = { name:"naina"};
// var copyobj = {...obj};

// js me kuch bhi likho mainly do prakar mein se kisiekprakar 
// ko belong karti hai 



//                                      thruthy and falsy--------------------------------------------

//falsy valuesye hai = 0 false undefined null  NaN document.all
// thruthy values

// if(document.all){
//     console.log("hey");
// }
// else {
//     console.log("hello");
// }


//                                   forEach forin do-while


//for each loop sirf array pe chalta haimatlabki jab bhi tumhare
//pass ek array ho , tb use me kuan ata haai foreach loop

// forEach kabhi bhi by default array mme changes ahi karta wo apko chnages keke deta hai array ki temporary 
//copy par jiske wjah se array humesa same rta hai 

//  var a = [ 1,2,23,34,4,23,4,3,45,54,3,24];
//  a.forEach(function(val){
// console.log(val+2)
//  })



//             forin loop:- object par loop krne ke liye hota hai forin loop

// var obj = {
//     name: "harsh",
//     age:24,
//     city:"bhopal" 
// }

// for( var key in obj){
//     console.log(key, obj[key]);

// }


//                         do while loops

var a = 12;
do{
console.log("hey i love u");
a++;
}while(a<15)

//                              callaback function
//jab bhi koi aisa code jo bad me chlta hai app likhoge ,kyuki wo code bad me chlta hai 
// js ko pata nahi hota ke wocompletehua ya nahi , aise code ke completeion pr js ko bataya 
// jaata hai ke bo complete hogya or app use chla skte ho , ye btane ka kam call back ka hai 

// Asynchronus js 

setTimeout(function(){
    console.log("2 seocnd ke lie chalao")
}, 2000);

// Aisa code jo baad me chlta hai use hum ek function  dedete hai ke bhiya jb completehojana 
// to ye function chala dena , aur wo function jo hum dete hai wo ek normal function hi hota 
// hai aur use khte hai call back function


