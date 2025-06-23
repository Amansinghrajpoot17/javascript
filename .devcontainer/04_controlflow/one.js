// if statement
// if(condition){
   // code
// } //syntax of if statement

// comparison operator:
// <,>,<=,>=,==,===

// if(2==="2"){
//     console.log("values are equal")
// }
// console.log("values are not equal")
const temp=45
if(temp<50){
    console.log("temperature is less than 50")
}
else{
console.log("temp is greater than 50")
}

// if we are not using else statement then it will print both statement
// if we are giving else statement then it will check condition and give output
const score= 200
if(score>100){
    const power= "fly"
    console.log(`user power is :${power}`)
}  
//console.log(`user power is :${power}`)
const userloggrdin=true
const debitcard=true
if(userloggrdin&&debitcard){
    console.log("allow to buy course")
}
const userlogged=true
const userloggrdinfromgoggle=true
const userloggedfromemail=false
if(userloggedfromemail || userloggrdinfromgoggle ){
    console.log("user logged in successfully")
}
// nullish coalescing operator (??): null or undefined
let val1;
val1= 5??10
console.log(val1)
val1 = null ?? 10
console.log(val1)
val2= undefined??null
console.log(val2)
