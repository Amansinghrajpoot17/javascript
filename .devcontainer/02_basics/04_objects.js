const regularuser= {
    email:"someone@gmail.com",
    fullname:{
        username:{
            firstname:"Aman",
            lastname:"rajpoot"
        }
    }
}
//console.log(regularuser.fullname.username)
const user=new Object()
//console.log(user)
const obj1= {1:"a", 2:"b", 3:"c"}
const obj2= {4:"d", 5:"e", 6:"f"}
const obj3= Object.assign({}, obj1,obj2)
//console.log(obj3)
const tinderuser={
    userid:"113ab",
    email:"a@gmail.com",
    location:"INDORE",
    Contactno:82134325
}
//console.log(tinderuser)
//console.log(Object.keys(tinderuser))
//console.log(Object.values(tinderuser))
//console.log(Object.hasOwn(tinderuser,"userid")) // checks whether value exists or not
const fuser={
    ishuman:false,
    printintroduction(){
       // console.log('my name is ${this.name}. am i human? ${this.ishuman}');
    },
};
const bsuse= Object.create(fuser);
bsuse.name="am";
bsuse.ishuman=true;
bsuse.printintroduction();
//console.log(bsuse)
const course={
    coursename:"javascript",
    price:999,
    courseinstructor:"Hitesh Choudary"

}
const {courseinstructor}=course// destructuring the objects
console.log(courseinstructor)
// {                                           //
                                                   //JSON syntax
//     "name": "aman",
//     "coursename": "javascript",
//     "price":"free"
// }