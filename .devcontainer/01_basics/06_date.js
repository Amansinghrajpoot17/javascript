 let mydate= new Date()
console.log(mydate.toDateString()) // returns date
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString()) // returns current date in mm/dd/yy 
console.log(mydate.toLocaleString())
 console.log(mydate.toTimeString())
console.log(mydate.toLocaleTimeString())
console.log(typeof mydate) // interview questions type of date

console.log(mydate.getDate())
console.log(mydate.getTime())
 let mycreateddate=new Date(2025,4,5)
 console.log(mycreateddate.toDateString())

 let mytimestamp= Date.now //get the time in miliseconds

console.log(mytimestamp())

 console.log(Math.floor(Date.now()/1000))// gets the time in milliseconds

let newdate= new Date()
 

console.log(newdate.getSeconds())
console.log(newdate.getUTCHours())
console.log(newdate.getFullYear())
console.log(newdate.getMonth())
console.log(newdate.getDay())
console.log(newdate.toLocaleString('ISN', {timeStyle:"full"}))
