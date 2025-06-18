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

console.log(jsusers.isLoggedIn)
console.log(jsusers["isLoggedIn"])
console.log(jsusers[mysm])
console.log(typeof jsusers[mysm])