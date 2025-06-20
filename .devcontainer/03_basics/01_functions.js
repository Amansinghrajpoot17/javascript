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

function userlogin (_username) {
    
    return '${_username} justloggedin'
}
console.log(userlogin("aman"))