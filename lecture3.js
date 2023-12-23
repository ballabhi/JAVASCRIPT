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

let str = "apna college";
let str2 = "shradaa";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[600000]);


//tempate  literals 


let obj= { 
    item: " pen",
    price:  10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupeee  `;
console.log(output);

console.log("the cost of " ,obj.item ,  " is " , obj.price, "rupees" )


let specialstring = `this is a template literal ${1+2+3}`;
console.log(typeof specialstring);

//escape character \n

// strings methods 


// let name = "ballabhi\n rawat";
// console.log(name.length
//     )

    let name = "ballabhi\n rawat";
    console.log(name.toUpperCase()
        )




        let name2 = "         ballabhi\n rawat  jhbb" ;
        console.log(name2.trim()
            )


            

            let str1 = "naina";
            let str3= "rawat";
            let res= str1.concat(str3);
            console.log(res)



