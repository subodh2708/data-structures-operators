'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '20:00',
    starterIndex = 0,
    mainIndex = 0,
    address,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} are going to be delivered at ${address}  on ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1},${ing2},${ing3}`);
  },
};

//Spread Operator

// const arr = [7, 9, 10];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMainMenu = [...restaurant.mainMenu, 'butter paneer'];
// console.log(newMainMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(completeMenu);

// const ingredients = [
//   prompt('what ingredients do you need?ing 1'),
//   prompt('Ing 2?'),
//   prompt('Ing 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// const newResturant = { ...restaurant, name: 'soulchef' };
// console.log(newResturant);
// newResturant.location = 'pearl apartment, gwalior';
// console.log(newResturant);
// console.log(restaurant);

//Destructuring Objects

// restaurant.orderDelivery({
//   time: '10:00',
//   starterIndex: 2,
//   mainIndex: 2,
//   address: 'awadh colony, nilmatha',
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//Destructuring Array

// let [main, secondary] = restaurant.order(2, 1);

// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;

// const arr = [4, 7, 9];

// const [a, , b] = arr;
// console.log(a, b);

// let [main, secondary] = [a, b];
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// const arr2 = [27, 15, [6, 26]];

// const [i, , [j, k]] = arr2;
// console.log(i, j, k);
