// global scope
var c=90
if(true){
    //local scope
    let a=8
    const b=9
    var c=7
}
// console.log(a)
// console.log(b)
//console.log(c)
// value of var is accessed outside the scope that's why it cannot be hused in block code
function one(){
    const username="AMAN"
    function two(){
        const website="youtube"
       // console.log(username)
        //child function can access parent function value
    }
    //console.log("website")

   // two()
}
one()
if(true){
    const username=" Aman"
    if(username===" Aman"){
        const website=" yahoo"
       // console.log(username + website)
    }
}
console.log(addone(5))
function addone(num){
    return num + 1
}
console.log(addtwo(num2)) // hoisting cannot access function before declaring
//expression function
const addtwo=function(num2){
    return num2+2
}
//console.log(addtwo(7))