let marks_class_12 = [91,82,63,84,null]
// let marks_class_12 = [91,82,63,84,false]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log("the length of marks_class_12 is ", marks_class_12.length)

console.log(marks_class_12[6])//undefined index 
marks_class_12[6]=89 //adding new value
marks_class_12[0]=80
console.log(marks_class_12[6])
console.log(marks_class_12[0])
console.log(typeof marks_class_12)


//quiz question 
let array = [ 5,10,20,30,40]
let i=0;
for(let i=0 ; i<array.length ;i++){
    console.log(array[i])
}
