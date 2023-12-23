//  question no 1 :-
let str = "Har\""
console.log(str.length)

//question 2:-
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

// //b part 
// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Expected output: true

// console.log(str1.startsWith('Sat', 3));
// // Expected output: false

// end with function 

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));
// // Expected output: false


// //que 3 :-
// let identity = "Ramesh"
// console.log(identity.toLowerCase())

//que4:- 

let str3 = " please give rs 1000"
let amount = Number.parseInt(str3.slice("Please give Rs ".length))
let amount1 = str3.slice(15)
console.log(amount)
console.log(amount1)
console.log(typeof amount)

//problem 5-

let friend= "deepika"
friend[3]="R"
console.log(friend)
//friend is not change because string is immutable 
