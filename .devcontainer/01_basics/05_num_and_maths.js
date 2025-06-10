const score= 100
console.log(score);

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //to fixed property is mainly used in e-commerce website

const num= 30.03
console.log(num.toPrecision(3))

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));
// +++++++++MATHS+++++++++++//
console.log(Math.abs(-4)); //abs converts negative value into positive value
console.log(Math.round(6.66)) //round gives the rounds off value of a decimal
console.log(Math.random()) //random is used when we create a game like dice game etc
console.log(Math.floor(Math.random()*10)+1);// avoids 0 in the output value

const max=10
const min=20

console.log(Math.floor(Math.random()*(max-min+1))+min)// retuns greater than min value and less than max value

