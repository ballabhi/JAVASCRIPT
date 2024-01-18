// 7)  delete 

// let num = [1,2,3,4,5,6,7,8,9]

// console.log(num.length)//before delete
// delete num[4]
// console.log(num)
// console.log(num.length) // after delete


//8)  concat arr1.concat(arry2)

// let num = [1,2,3,4,5,6,7,8,9]
// let num_more = [ 11,12,13,14,15,16,17,18,19]
// let num_even =[ 111,222,333,444,555,666,777,888,999]
// // let newArray = num_more.concat(num)
// let newArray = num.concat(num_more , num_even )
// console.log(newArray)
// console.log(num , num_more)

//9) sort method original array ko change krdeta hai ye
// acsending order:-

// let compare = (a,b)=>{
// return a-b
// }
// let num = [551,22,3,14,5,6,7,8,229]
// num.sort(compare)
// console.log(num) //aphabetically sort krra hi num ko string manke solve kar rha hai


//decsending order:-

// let compare = (a,b)=>{
//     return a-b
//     }
//     let num = [551,22,3,14,5,6,7,8,229]
//     num.sort(compare)
//     console.log(num) //aphabetically sort krra hi num ko string manke solve kar rha hai
    

// 10) reverse method reverse the string .reverse()

// let compare = (a,b)=>{
//     return a-b
//     }
//     let num = [551,22,3,14,5,6,7,8,229]
//     num.sort(compare)
//     num.reverse()
//     console.log(num) //aphabetically sort krra hi num ko string manke solve kar rha hai
    


    //11)     splice and slice

//     let num = [551,22,3,14,5,6,7,8,229]
// let deletedvalue = num.splice(2,4,1011,1022,1023,1024,1025)
// console.log(num)
// console.log(deletedvalue)

    // 12)  slice ye original arraymodify ni krta new array detahai

    let num = [551,22,3,14,5,6,7,8,229]
   //aray modify ni krti new array create kregi
    let newArray =  num.slice(3 ,8)
    console.log(newArray)
  







