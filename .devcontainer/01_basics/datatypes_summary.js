// types of datatypes 

//these are categorized on the basis of call byvalue or call by reference

  //. primitive datatypes are those which are categorized on the basis of call by value..

  //1. strings . 2. numbers, 3. boolean 4. null 5. undefined 6. symbol 7. bigint

  // reference type (non primitive) : call by reference 

  // 1. arrays 2. objects 3. functions

  // memory allocations----

// stack (primitive data types) it gives copy of  the value but does not give the original reference value..
 
// heap (non- primitive data types) it gives the reference of the value, so if we change any element on that reference
//value will be changed for all references.

let username= "aman"
 
let anotherusername = username
anotherusername="chai"
console.log(anotherusername);
console.log(username);
 
let user1 =  {
  email: "aman567@gmail.com",
  name: "aman"
}
let user2=user1
console.log(user2)
user2.name="alpha"
console.log(user2.name);
console.log(user1.name);