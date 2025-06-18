// declaring object with a constructor creates singleton object

// object literals
const mysm= Symbol("key1")
const jsusers= {
    name: "AMAN",
    age: 23,
    location: "BHOPAL",
    [mysm]: "mykey1",
   
    email: "aman@gmail.com",
   isLoggedIn:false,
   lastLoginDays: ["monday","saturday"]
}

// console.log(jsusers.isLoggedIn)
// console.log(jsusers["isLoggedIn"])
// console.log(jsusers[mysm])
// console.log (jsusers[mysm])
//console.log(jsusers)
jsusers.age= 24 // this method is used to change the value of an object.
console.log(jsusers["age"])
//console.log(jsusers)
jsusers.isLoggedIn= true
//Object.freeze(jsusers)
jsusers.isLoggedIn= true
console.log(jsusers["isLoggedIn"])
jsusers.greetings= function(){
    console.log("HELLO JSUSERS");
}
jsusers.greetingstwo= function(){
    console.log('Hello jsusers, ${this.name}') ;
}
console.log(jsusers.greetings())
console.log(jsusers.greetingstwo())
