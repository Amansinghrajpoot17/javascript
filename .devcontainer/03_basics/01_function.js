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
    if(_username===undefined){
       console.log("please enter username") 
        return
    }
    return `${_username} justloggedin`
}
console.log(userloginmessage())