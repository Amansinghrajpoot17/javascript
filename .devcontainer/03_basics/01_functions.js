function saymyname (){
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")

}
saymyname()
function add (number1, number2){
    let result=(number1+number2)
    return result;
    console.log("asa")// after return we cannot print anything on the browser
}
const result=add(3,4)
//console.log("result:",result)
function userloginmessage(username){
    return '${username} just logged in'
}
console.log(userloginmessage());