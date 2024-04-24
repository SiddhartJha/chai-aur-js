// singleton - object.create

const symb = Symbol("key1")
const jsuser = {
    name: "siddharth",
    age: "22",
    city: "delhi",
    isLoggedIn: "false",
    [symb]: "mykey1",
    "full-name": "siddharth jha" 
}

// console.log(jsuser)
// console.log(typeof(jsuser["full-name"]))

// jsuser.greeting = function(){
//     console.log("hello js users")
// }

// console.log(jsuser.greeting) // returns Function(anonymous)

// console.log(jsuser.greeting())

// jsuser.greeting2 = function(){
//     console.log(`hello user ${this.name}`)
// }

// console.log(jsuser.greeting2())

// const newuser = new Object();  //- singleton object

// const tinderuser = {} // - non singleton object

const obj1 = {a: "1", b: "2", c: "3"}
const obj2 = {d: "4", e: "5", f: "6"}

const obj3 = Object.assign({}, obj1, obj2) //Obect.assign({target},sources)
// console.log(obj3)

// we wil mostly use spread operator for merging objects 

const obj4 = {...obj1,...obj2}
// console.log(obj4)

// we can also get all key or all values of a objct in a array 

// console.log(Object.keys(jsuser)) //getting all keys of jsuser
// console.log(Object.values(jsuser)) //getting all values of jsuser


// console.log(jsuser.hasOwnProperty('name'));

// DESTRUCTURING OF OBJECT:

// instead of using object.key we can use:

// const {name} = jsuser
// console.log(name)

// we can even store the key in another variable as {key: variable name}

const {name: naam} = jsuser
console.log(naam)