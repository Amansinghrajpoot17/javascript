const { use } = require("react")

function saymyname (){
    // console.log("A")
    // console.log("M")
    // console.log("A")
    // console.log("N")

}
saymyname()
function add (number1, number2){
    let result=(number1+number2)
    //return result;
  //
  //   console.log("asa")// after return we cannot print anything on the browser
}
const result=add(3,4)
//console.log("result:",result)

function userlogin (_username="sam") {
    if(_username===undefined){
        //console.log("please enter username")
    }
   // return
    
    return `${_username} justloggedin`
}
//console.log(userlogin("som"))
function shoppingcartprice(val1,val2,...num1){
    return num1
}
//console.log(shoppingcartprice(100,200,330,567,789)) // val1==100, val2==200 rest==[330,567,789]
const user={
    username:"aman",
    price: 1000
}
function handleobject (anyobject){
   console.log(`username is ${anyobject._username} and price is ${anyobject.price}`)

}
handleobject(user)