'use strict';

// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;

// //   function printAge() {
// //     let output = `${firstName}, Your are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       var millenial = true;
// //       const firstName = 'Steven';
// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }
// //       output = `NEW OUTPUT!`;
// //     }
// //     // console.log(str);
// //     console.log(millenial);
// //     console.log(output);
// //     // add(2,3);
// //   }
// //   printAge();

// //   return age;
// // }

// // const firstName = 'Jonas';
// // calcAge(1991);

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //function
// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a,b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;

// //Example
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// move to another repository

// console.log(this);
// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     // console.log(this);
//     console.log(2037 -this.year);
//   }
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017
// };

// matilda.calcAge = jonas.calcAge
// matilda.calcAge();

// const f = jonas.calcAge;

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function() {
//     // console.log(this);
//     console.log(2037 -this.year);
    
//     //solution1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // }
    
//     //solution2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`)
//   },
// };

// jonas.greet();
// console.log(this.firstName);
// jonas.calcAge();

// //Argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments)
//   return a + b;
// }
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2,5,8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
