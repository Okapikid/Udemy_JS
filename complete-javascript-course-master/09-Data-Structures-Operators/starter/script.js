'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// ES6 ENHANCED OBJECT LITERALS
// openingHours,

// OLD WAY
// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// NEW WAY
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// LOOPING OVER OBJECT KEYS
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// LOOPING OVER OBJECT VALUES
// const values = Object.values(openingHours);
// console.log(values);

// LOOPING OVER THE ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);

// DESTRUCTURING OBJECTS WHILE LOOPING
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // WITHOUT OPTIONAL CHAINING
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// if (restaurant.openingHours && restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }

// // WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// // EXAMPLE
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}!`);
// }

// // OPTIONAL CHAINING WITH METHODS: CNA CHECK IF A METHOD EXISTS BEFORE WE CALL IT
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // OPTIONAL CHAINING WITH ARRAYS
// const users = [{ firstName: 'Auggie', email: 'email@email.com' }];

// console.log(users[0]?.firstName ?? 'user array empty');
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('user array empty');
// }
// THE FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// // .ENTRIES = ARRAY ITERATOR
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// REST PATTERN: USED TO COLLECT MULTIPLE ELEMENTS AND CONDENSE THEM INTO AN ARRAY
// REST PATTERN ON LEFT SIDE OF =, SPREAD ON RIGHT SIDE
// REST PATTERN USED TO CREATE AN ARRAY OUT OF "REMAINING DATA"
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// REST PATTERN MUST BE THE LAST ELEMENT IN THE ARRAY, AND DOES NOT PICK UP PREVIOUSLY SKIPPED DATA
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// REST FOR OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// REST FOR FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// SPREAD OPERATOR: TAKES ALL THE ELEMENTS OUT OF AN ARRAY AND DOESN'T CREATE NEW VARIABLES
// CAN ONLY BE USED IN PLACES WHERE WE WOULD OTHERWISE WRITE VALUES SEPARATED BY COMMAS
// USED TO BUILD NEW ARRAYS OR TO PASS MULTIPLE VALUES INTO A FUNCTION
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // SHALLOW COPIES (MADE WITH SPREAD OPERATOR)
// const mainMenuCopy = [...restaurant.mainMenu];

// // TO JOIN TWO ARRAYS TOGETHER
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // ITERABLES: ARRAYS, STRINGS, MAPS, AND SETS (BUT NOT OBJECTS)
// const str = 'Jonas';
// const letters = [...str, ' ', 's'];
// console.log(letters);

// FUNCTION EXAMPLE
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// OBJECTS
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: cats,
// } = restaurant;
// console.log(restaurantName, hours, cats);

// // DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// NESTED OBJECTS
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// DESTRUCTURING
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// SWITCHING VARIABLES
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// NESTED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// const [e, , f] = nested;
// console.log(e, f);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// SHORT CIRCUITING
// LOGICAL OPERATORS CAN USE ANY DATA TYPE, CAN RETURN ANY DATA TYPE
// SHORT CIRCUIT EVALUATION: IF THE FIRST VALUE IS TRUTHY, IT WILL IMMEDIATELY BE RETURNED
// THE FIRST TRUTHY VALUE WILL BE RETURNED
// IF NO TRUTHY VALUES ARE PRESENT, THE LAST FALSY VALUE WILL BE RETURNED
// console.log('-----OR-----');
// console.log(3 || 'Auggie');
// console.log('' || 'Auggie');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// CAN BE USED IN TERNARY OPERATORS
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// AND OPERATOR SHORT CIRCUITS WHEN FIRST OPERATOR IS FALSY AND IMMEDIATELY RETURNS IT
// IF ALL VALUES ARE TRUTHY, IT RETURNS THE LAST VALUE
// console.log('-----AND-----');
// console.log(0 && 'Jonas');
// console.log('Hello' && 23 && null && 'Auggie');

// RATHER THAN USING AN IF STATEMENT TO SEE IF A FUNCTION EXISTS ...
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// WE CAN USE THE && SHORT CIRCUIT TO EXECUTE CODE IN THE SECOND OPERANT IF THE FIRST ONE IS TRUE
// console.log(restaurant.orderPizza && restaurant);

// NULLISH COALESCING OPERATOR: ??
// WORKS WITH THE CONCEPT OF KNOWLEDGE VALUES RATHER THAN FALSY VALUES
// NULLISH VALUES TREAT 0 AND "" AS TRUTHY
// ONLY GETS SHORT CIRCUITED BY NULLISH VALUES: NULL AND UNDEFINED
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// --------------------------------------------------------------------------

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// LOGICAL OR ASSIGNMENT OPERATOR, ASSIGNS A VALUE TO A VARIABLE IF IT'S CURRENTLY FALSY
// WORKS IDENTICALLY TO THE ABOVE CODE
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// LOGICAL NULLISH ASSIGNMENT OPERATOR
// INCORPORATES THE NULLISH COALESCING OPERATOR, ALLOWS FOR FALSY VALUES (LIKE 0)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// LOGICAL AND ASSIGNMENT OPERATOR
// ASSIGNS A VALUABLE TO A VARIABLE IF IT IS CURRENTLY TRUTHY
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored.`);
// };
// printGoals('Davis', 'Muller', 'Lewandoski', 'Kimmich');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal: ${i + 1} ${[player]}`);
}

// 2.
let avg = 0;
let odds = Object.values(game.odds);
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

// NOTE: ARRAYS CAN USE .ENTRIES, BUT OBJECTS HAVE TO USE OBJECT.ENTRIES(AND PASS IN THE OBJECT)
// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr} ${odd}`);
}
