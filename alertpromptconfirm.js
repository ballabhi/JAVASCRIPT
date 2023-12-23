// alert("hello javascrpt code work ")
// alert as a string value ko leta HTMLDetailsElement 

alert(" enter the value of a!")
let a = prompt("Enter a here ")
// document.write(a) 
a = Number.parseInt(a)

alert(" you entered a of type " + (typeof a))

let write = confirm(" do you want to write it to the page"
)
if(write){
    document.write(a)

}
else {
    document.write("please aloow me to write ")
}