// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var numOfMultiples = 0;

  _.each(numbers, function(value) {
    if (value % 5 === 0) {
      numOfMultiples += 1;
    }
  });

  return numOfMultiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(memo, value) {
    var currentPriceNumber = Number(value['price'].slice(1, value['price'].length));
    var total = memo + currentPriceNumber;

    return total;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
//I: an array of dessert objects with a type key
//O: look at example output.
//C: use _.reduce.
  //parameters: desserts array,
             // function
                //parameters: memo (accumulator), value (object rep dessert), starting value of memo
//E: im not sure
//STRATEGY: use reduce and have if type not found in memo type as key to memo, if in memo add value
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(memo, value) {
    var type = value['type'];

    memo[type] === undefined ? memo[type] = 1 : memo[type] ++;

    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

var ninetiesKid = function(movies) {
//key is releaseYear
  return _.reduce( movies, function(memo, movie) {
    var year = movie['releaseYear'];
    var title = movie['title'];
    if (year >= 1990 && year <= 2000) {
      memo.push(title);
    }

    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, movie) {
    if (memo === false) {
      movie['runtime'] < timeLimit ? memo = true : memo;
    }

    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  return _.map(desserts, function(dessert) {
    dessert['ingredients'].indexOf('flour') > -1 ?
    dessert['glutenFree'] = true : dessert['glutenFree'] = false;
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  _.map(groceries, function(item) {
    var price = Number(item['price'].slice(1, item['price'].length));
    var discount = price * coupon;
    item['salePrice'] = '$' + (price - discount).toString().slice(0, 4);
  });

  return groceries;
};

