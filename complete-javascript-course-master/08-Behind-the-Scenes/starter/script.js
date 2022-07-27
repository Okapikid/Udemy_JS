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
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
