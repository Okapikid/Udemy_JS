'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = 'Billy';

//       // reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Auggie';

// calcAge(1982);
// calcAge(1990);

// VARIABLE HOISTING
// VAR WILL BE "UNDEFINED"
// LET & CONST ARE IN THE "TEMPORAL DEAD ZONE" (TDZ), AND WILL THROW AN ERROR
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Auggie';
// let job = 'strategist';
// const year = 2022;

// FUNCTION HOISTING
// FUNCTION DECLARATION CAN BE HOISTED
// FUNCTION EXPRESSION IS IN THE "TEMPORAL DEAD ZONE" (TDZ), FOR VAR, LET, AND CONST VARIABLES
// ARROW FUNCTION IS IN THE "TEMPORAL DEAD ZONE" (TDZ), FOR VAR, LET, AND CONST VARIABLES
// console.log(addDecl(1, 2));
// console.log(addExp(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// EXAMPLE: BECAUSE NUMPRODUCTS IS HOISTED WITH A VAR VARIABLE, IT ISN'T 10 WHEN IT'S CALLED, IT'S UNDEFINED
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// ONLY VAR CREATES PROPERTIES ON THE WINDOW OBJECT
// var x = 1;
// let y = 2;
// const z = 3;

// TRUE
// console.log(x === window.x);
// FALSE
// console.log(x === window.x);
// FALSE
// console.log(x === window.x);

// ============================================

// THIS (KEYWORD/VARIABLE)
// VALUE IS NOT STATIC, AND IS ASSIGNED WHEN CALLED
// METHOD => THIS = OBJECT THAT IS CALLING THE METHOD
// SIMPLE FUNCTION CALL => THIS UNDEFINED (IN STRICT MODE) OR WILL BIND TO THE WINDOW OBJECT
// ARROW FUNCTIONS => THIS = ARROW FUNCTIONS DON'T GET A THIS KEYWORD ("LEXICAL THIS")
// EVENT LISTENER => THIS = DOM ELEMENT THAT THE HANDLER IS ATTACHED TO
// NOTE: WILL NEVER POINT TO THE FUNCTION USING IT OR TO THE VARIABLE ENVIRONMENT

// LOGS WINDOW OBJECT
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1982);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1982);

// const auggie = {
//   year: 1982,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// auggie.calcAge();

// const denton = {
//   year: 2017,
// };

// CAN "BORROW" A METHOD'S FUNCTION
// denton.calcAge = auggie.calcAge;
// denton.calcAge();

// const f = auggie.calcAge;

// UNDEFINED, SINCE "F" DOESN'T HAVE A YEAR
// f();

// var firstName = 'Denton';

// const auggie = {
//   firstName: 'Auggie',
//   year: 1982,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this;
//     // const isMillennial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     const isMillennial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillennial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// THIS IN THE ARROW FUNCTION WILL RETURN UNDEFINED BECAUSE IT IS IN THE GLOBAL SCOPE (WINDOW OBJECT), UNLESS SOMETHING LIKE THE VAR FIRSTNAME IS ADDED ABOVE
// auggie.greet();
// auggie.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'Auggie',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('me:', me);
// console.log('friend:', friend);

// let lastName = 'Augustine';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName);
// console.log(oldLastName);

// const jessica = {
//   firstName: 'jessica',
//   lastName: 'williams',
//   age: 27,
// };

// const marriedJessica = jessica;

// marriedJessica.lastName = 'Davis';
// console.log('before:', jessica);
// console.log('after', marriedJessica);

// OBJECT.ASSIGN CAN CREATE A SHALLOW COPY (CAN COPY THE TOP-LEVEL OBJECT)
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before:', jessica2);
console.log('After:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before:', jessica2);
console.log('After:', jessicaCopy);
