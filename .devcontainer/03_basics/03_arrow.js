//const { use } = require("react")

const user = {
    username:"Aman",
     price:999,
     welcomemessage: function(){
      //   console.log(`${this.username}, welcme to our platform`)
      //   console.log(this)
     }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
//console.log(this)
// this refers to currrent context
// in browser window is a global object  
function cricket(){
   const username= "Risabh Pant"
   console.log(this.username)
}
cricket()
// we cannot access this in the function.
// this can only be used in the object or we can access it