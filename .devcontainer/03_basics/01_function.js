function saymyname (){
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")
    
}
console.log(saymyname())
function add(number1,number2) {
let result= number1+number2
return result    
}
const result= add(5,7)
console.log("RESULT IS:",result)
function userloginmessage (_username){
    if(!_username){
       console.log("please enter username") 
        return
    }
    return `${_username} justloggedin`
}
console.log(userloginmessage("Aman"))
// rest operator can be used to pass multiple values on a single parameter
function calculateprice(...num1){
    return num1
}
// passing objects in a function
console.log(calculateprice(2,3))
const user={
    username:"sams",
    price:999
}
function handleobject(anyobject){
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)
// passing array in a function
const myarray=[200,300,500]
function returnsecondvalue (getnewarray){
    return getnewarray[1]
}
console.log(returnsecondvalue(myarray))