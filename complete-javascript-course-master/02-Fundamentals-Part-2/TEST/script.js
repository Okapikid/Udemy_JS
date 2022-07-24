// const friends = [`Flip`, `Mo`, `Denton`];
// friends.push(`Auggie`);
// console.log(friends);

// friends.unshift(`DTTE`);
// console.log(friends);

// friends.pop();
// console.log(friends);

// console.log(friends.indexOf("Mo"));

// var calcTip = function (bill) {
//   for (i = 0; i < bills.length; i++) {
//     if (bill >= 50 && bill <= 300) {
//       bill = (bill * 0.15) + bill;
//     } else {
//       bill = (bill * 0.2) + bill;
//     }
//     console.log(calcTip());
//   }
// };

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const auggieArray = [
//   `Mike`,
//   `Augustine`,
//   2022 - 1982,
//   `Engineer`,
//   [`Denton`, `Mo`, `Flip`]
// ];

// const auggie = {
//   firstName: `Auggie`,
//   lastName: `Augustine`,
//   age: 2022 - 1982,
//   job: `engineer`,
//   friends: [`Denton`, `Mo`, `Flip`]
// };
// console.log(auggie);

// console.log(auggie.lastName);
// console.log(auggie[`lastName`]);

// const nameKey = `Name`;
// console.log(auggie[`first` + nameKey]);
// console.log(auggie[`last` + nameKey]);

// const interestedIn = prompt(`What would you like to know about Auggie? You can choose from firstName, lastName, age, job, or friends`)

// console.log(auggie[interestedIn]);

// if (auggie[interestedIn]) {
//   console.log(auggie[interestedIn]);
// } else {
//   console.log(`Not a valid choice, try again!`);
// }

// console.log(`${auggie.firstName} has ${auggie.friends.length} friends and his best friend is called ${auggie.friends[0]}`);

// const auggie = {
//   firstName: `Auggie`,
//   lastName: `Augustine`,
//   birthYear: 1982,
//   job: `engineer`,
//   friends: [`Denton`, `Mo`, `Flip`],
//   hasDriversLicense: true,
//   calcAge: function () {
//     return 2037 - this.birthYear;
//   }
// }
// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// },

//   getSummary: function () {
//     return (`${auggie.firstName} is a ${this.calcAge()} year old ${auggie.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`);
//   }
// };

// console.log(auggie.getSummary());

// const markObject = {
//   fullName: `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// const johnObject = {
//   fullName: `John Smith`,
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// markObject.calcBMI();
// johnObject.calcBMI();

// function compare() {
//   if (johnObject.calcBMI > markObject.calcBMI) {
//     console.log(`John's BMI (${johnObject.bmi}) is higher than Mark's (${markObject.bmi})`)
//   } else {
//     console.log(`Mark's's BMI (${markObject.bmi}) is higher than John's (${johnObject.bmi})`)
//   }
// }
// compare();

// const types = [];
// types[0] = `string`;
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < auggie.length; i++) {
//   if (typeof auggie[i] !== 'string');
//   return auggie[i];
// }
// console.log(auggie[i], typeof auggie[i]);

// const auggie = [
//   `Auggie`,
//   `Augustine`,
//   2037 - 1991,
//   `engineer`,
//   [`Denton`, `Mo`, `Flip`]
// ];

// for (let i = auggie.length - 1; i >= 0; i--) {
//   console.log(auggie[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`)

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights rep number ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} `);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} `);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is about to end...`);
//   }
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (var i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// PASSWORD CHECKER
// const isThisAValidPassword = password => {
//   let upper = false;
//   let lower = false;
//   if (password.length < 8) {
//     return false;
//   }
//   for (let i = 0; i < password.length; i++) {
//     if (password[i].toLowerCase() === password[i]) {
//       lower = true;
//     }
//     if (password[i].toUpperCase() === password[i]) {
//       upper = true;
//     }
//   }
//   return lower && upper
// }
// console.log(isThisAValidPassword('Doggie'));
// console.log(isThisAValidPassword('goodDoggo1'));

// CONTENT206

// ---------------------------------------------------------------

// CONSTRUCTORS
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year},`;
//   };
// }

// // instantiate an object
// const book1 = new Book("I wrote a book", "me", "2022");
// const book2 = new Book("Title", "author", "2022");

// console.log(book1);
// console.log(book1.getSummary());

// ---------------------------------------------------------------

// PROTOTYPE METHOD
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // getAge
// Book.prototype.getAge = function () {
//   const years = 2022 - this.year;
//   return `${this.title} is ${years} years old.`;
// };

// // getSummary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}.`;
// };

// // revise / change year
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// // instantiate an object
// const book1 = new Book("I wrote a book", "me", "2020");
// const book2 = new Book("Title", "author", "2020");

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// book2.revise(2010);
// console.log(book2);

// ---------------------------------------------------------------

// // INHERITANCE
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}.`;
// };

// // MAGAZINE CONSTRUCTOR
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// // INHERIT PROTOTYPE
// Magazine.prototype = Object.create(Book.prototype);

// // INSTANTIATE MAGAZINE OBJECT
// const mag1 = new Magazine("Mag one", "Me", "2018", "Feb");
// console.log(mag1.getSummary());

// ---------------------------------------------------------------

// OBJECT OF PROTOS
// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function () {
//     const years = 2022 - this.year;
//     return `${this.title} is ${years} years old`;
//   },
// };

// // CREATE OBJECT
// const book1 = Object.create(bookProtos);
// book1.title = "Book title";
// book1.author = "Writer Person";
// book1.year = "2012";

// console.log(book1);

// --------------------------------------------------------------

// ES6 CLASSES
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}.`;
//   }

//   getAge() {
//     const years = 2022 - this.year;
//     return `${this.title} is ${years} old.`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
// }

// // INSTANTIATE AN OBJECT
// const book1 = new Book("Book One", "Writer Person", "2020");

// console.log(book1);
// book1.revise(2018);
// console.log(book1);

// console.log(book1.getSummary());
// console.log(book1.getAge());

// --------------------------------------------------------------
// SUBCLASSES
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}
// MAGAZINE SUBCLASS
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// INSTANTIATE MAGAZINE
const mag1 = new Magazine("Mag Title", "Writer Person", "2000", "Feb");
console.log(mag1);
console.log(mag1.getSummary());
