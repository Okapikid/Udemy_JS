// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // }
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// // 1) new object is created
// // 2) function is called, this = {}
// // 3) {} linked to prototype
// // 4) function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// }
// jonas.calcAge();

// // this is false: Person.prototype is the prototype of objects created by Person 
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = `Homo Sapiens`;

// console.log(jonas);

// CONSTRUCTOR FUNCTIONS

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//   console.log(this.speed -= 5);
// }

// const Car1 = new Car('BMW', 120);
// const Car2 = new Car('Mercedes', 95);

// console.log(Car1.brake());
// console.log(Car2.accelerate());
// console.log(Car2.accelerate());
// console.log(Car2.accelerate());

// ES6 CLASSES

// CLASS EXPRESSION:
// const PersonCL = class {

// }

// // CLASS DECLARATION:
// class PersonCL {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // methods here will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCL('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCL.prototype);


// jessica.greet();

// SETTERS AND GETTERS
const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);