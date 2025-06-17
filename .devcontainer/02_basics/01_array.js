// javascript arrays create shallow copies when performing copy operation on array 
// rather than deep copies
// shallow copies: it shares the same reference as of the original .. i.e. if we change the copy element 
//it will cause change in th source code.
// const aman=[21,23,25]
// aman.push(26,27)
// aman.pop()
// aman.unshift(20)// it inserts the element at the starting of the array
// aman.shift()// removes the starting elements from the array
// console.log(aman)
// console.log("A", aman)
// const aman2=aman.slice(23,26)
// console.log(aman2);
//console.log("B", aman2)
const arr1=[1,2,3,4,5,6]
console.log("A", arr1)
const arr2= arr1.slice(2,5)
console.log(arr2)
console.log("B",arr1)
const myarr= arr1.splice(3,6)
console.log(myarr)
console.log("C", arr1)