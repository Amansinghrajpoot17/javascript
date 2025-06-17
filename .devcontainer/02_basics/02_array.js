const myarr= [2,2,3,4,5,6,7]
const myarr2= [4.8,9,7]
//myarr.push(myarr2)
//console.log(myarr)
//const myarr3= myarr.concat(myarr2)
//console.log(myarr3)
const my= [...myarr, ...myarr2]
console.log(my)