const { use } = require("react")

const user = {
    username:"Aman",
     price:999,
     welcomemessage: function(){
        console.log(`${this.username}, welcme to our platform`)
     }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()