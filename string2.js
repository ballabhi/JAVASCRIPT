// /// methods of string 

// // 1) method 1: - length 
// // let name="ballabhi"
// // console.log(name.length)

// // let name="ballabhi==================== "
// // console.log(name.length)

// // // 2) method 2 :- toUpperCase() 

// // console.log(name.toUpperCase())
// // console.log(name.toLowerCase())

// // //3) method 3:- .slice(x,y)
// // console.log(name.slice(2,7))
// // // .slice(z)
// // console.log(name.slice(4))

// // //4) method 4:-.replace("abc" , " bca")
// // console.log(name.replace("ball" , "shaul"))

// //5) method 5:- .concat(name1, "yes")

// let name="ballabhi"
// let friend = "nikhil"
// console.log(name.concat(" is a friend of ", friend , " okay guys"))

// //6) method 6 :- trim() cut the blank spaces 

// let friend2 = "    urfii    "
// console.log(friend2)
// console.log(friend2.trim())



// string method mdn pe jaake dekh skte hai

// string are immutable  inorder t acess the character at an index we use the following syntax

// let fr="shivika " + "harry" +" raman "
// // console.log(fr[i])
// // }
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// console.log(fr)

// console.log(fr[4])
// console.log(fr[5])
// console.log(fr[6]
// )
let fr= "shivika"
let i=0;
for(let i=0; i<8 ;i++){
    console.log(fr[i])
}
