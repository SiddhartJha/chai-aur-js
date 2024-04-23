// let value = 3;
// let negValue = -value;
// // console.log(negValue);

// const str1 = "hello"
// const str2 = " siddharth"
// const str3 = str1+str2
// console.log(str3);
// console.log("1"+2)
// console.log(1+"2")
// //
// console.log("1"+2+2)   // yha string phle h isliye string add nhi ho rha h
// console.log(1+2+"3")  //yha string baad mein h isliye phle add ho rha h

// console.log(+true);
// console.log(+"")

// //link to study
// //https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// //********comparissons********

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

//in >< >= <= comparisons comparison convertor converts null into zero(0)

// ************************datatypes summary*******************

//primitive: 

// 7 types: string, Boolean, Number, null, undefined, symbol, BigInt

//reference or non primitive

//Array, Objects, functions
// const id = Symbol('23')
// console.log(id)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Primitive(stack) - yahan se hum koi value lete hain toh uska copy milta hai , 
// non-Primitive(queue) - yahan se hum koi value lete hain toh uska reference milta hai

// ******************

const name = "siddharth "
const repocount = 50

// console.log(name + repocount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repocount}` )

// const gameName = new String('sid');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('d'))

// const newstring = "      siddharth      jha"
// const str = "      Harsh     "

// console.log(newstring)
// console.log(newstring.trim())
// const str2 = str.trim()
// console.log(str2.length)

// const url = "https://subham.com/subham%20choudhary/"
// console.log(url.replace('%20','-'))

// numbers**********************************


// const score = 400
// const balance = new Number(100)
// console.log(balance);

// console.log(score.toString().length)
// console.log(balance.toFixed(5))

// const othernumber = 23.8966

// console.log(othernumber.toPrecision(2))

// const hundreds = 10000000

// console.log(hundreds.toLocaleString('en-IN'))

// console.log(Math.random())
// console.log((Math.random()*10)+1)
// console.log(Math.floor((Math.random()*10)+1))

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max-min+1))+min)

// ********Dates*********

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));
const newDate = new Date()
newDate.toLocaleString('default',{
    weekday: "long"

})
