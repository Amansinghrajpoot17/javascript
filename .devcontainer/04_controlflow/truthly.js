//const useremail=""
//const useremail= []
//const useremail={}
const useremail=null
if (useremail) {
    console.log("user got email")
    
}
else{
    console.log("user don't have email")
}
// falsy values
// false, 0, -0, bigint 0n,"",null,nan,undefined
// truthy value
// "0"," ",'false',[],{},function(){}
const user=[]
if (user.length===0) {
    console.log("Array is empty")
}
// to check empty array
const userlog= {}
if (Object.keys(userlog).length===0) {
    console.log("object is empty")
}
// to check empty object
//ternary operator
//condition ? true: false
const iceteaprice= 75
iceteaprice <=60 ? console.log("price less than 60"): console.log("price graeter than 60")