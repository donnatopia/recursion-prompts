/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  var product = 1;

  if (n > 0) {
    product = n * factorial(n - 1);
  } else if (n < 0) {
    return null;
  }

  return product;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var total = 0;

  if (array.length > 1) {
    total += array[0] + sum(array.slice(1))
  } else if (array.length === 1){
    total += array[0];
  }

  return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;

  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      total += arraySum(array[i]);
    }
  } else {
    total += array;
  }

  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var total = 0;
  var negative = false;

  if (n < 0) {
    negative = true;
    n = Math.abs(n);
  }

  if (n > 1) {
    total += (n - 1) + sumBelow(n - 1);
  }

  if (negative) {
    return -total;
  } else {
    return total;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var rangeArr = [];
  var integersInRange = Math.abs(y - x) > 1;

  if (integersInRange) {
    if(x < y) {
      rangeArr = rangeArr.concat((x + 1), range(x + 1, y));
    } else if (x > y) {
      rangeArr = rangeArr.concat((x - 1), range(x - 1, y));
    }
  }

  return rangeArr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  if(exp === 0) {
    return 1;
  } else if (exp >= 1) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return 1/(exponent(base, -exp));
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1) {
    return string;
  } else {
    var lastLetter = string.substring(string.length - 1);
    var withoutLast = string.substring(0, string.length - 1);
    return lastLetter + reverse(withoutLast);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) {
    return true;
  } else {
    string = string.toLowerCase()
                 .match(/[a-z]/g)
                 .join('');

    var first = string[0];
    var last = string[string.length - 1];

    if (first === last) {
      var newString = string.substring(1, string.length - 1);
      return palindrome(newString);
    } else {
      return false;
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var difference = Math.abs(x) - Math.abs(y);

  if (difference < Math.abs(x)) {
    return x > 0 ? difference : -difference;
  } else {
    var positiveY = Math.abs(y);
    return x > 0 ? modulo(x - positiveY, y) : modulo(x + positiveY, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str[0]];
  } else {
    return [str[0]].concat(createArray(str.substring(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return [array[0]];
  } else {
    var lastElement = array[array.length - 1];
    array.pop();
    return [lastElement].concat(reverseArr(array));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else {
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var arr = [];
  var numWord = '' + n;

  if (n % 3 === 0 && n % 5 === 0) {
    numWord = 'FizzBuzz';
  } else if (n % 5 === 0) {
    numWord = 'Buzz'
  } else if (n % 3 === 0) {
    numWord = 'Fizz';
  }

  if (n === 0) {
    return [];
  } else {
    return fizzBuzz(n - 1).concat(numWord);
  }

};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var occurrence = 0;

  if (array.length > 0) {
    if (array[0] === value) {
      occurrence++;
    }

    if (array.length > 1) {
      array.shift();
      occurrence += countOccurrence(array, value);
    }
  }

  return occurrence;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var map = [];

  if (array.length > 0) {
    var mutatedFirst = callback(array[0]);
    var withoutFirst = array.slice(1, array.length);

    if (withoutFirst) {
      map = [mutatedFirst].concat(rMap(withoutFirst, callback));
    } else {
      map = [mutatedFirst];
    }
  }

  return map;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var occurrence = 0;

  for (var objKey in obj) {
    if (objKey === key) {
      occurrence++;
    }

    if (typeof obj[objKey] === 'object') {
      occurrence += countKeysInObj(obj[objKey], key);
    }
}

  return occurrence;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var occurrence = 0;

  for (var objKey in obj) {
    var objValue = obj[objKey];

    if (objValue === value) {
      occurrence++;
    }

    if (typeof objValue === 'object') {
      occurrence += countValuesInObj(objValue, value);
    }
  }

  return occurrence;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var objKey in obj) {
    var objValue = obj[objKey];

    if (objKey === oldKey) {
      obj[newKey] = objValue;
      delete obj[oldKey];
    }

    if (typeof objValue === 'object') {
      objValue = replaceKeysInObj(objValue, oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n === 1) {
    return [0, 1];
  } else if (n > 1) {
    var previous = fibonacci(n - 1);
    return previous.concat(previous[n - 2] + previous[n - 1]);
  } else {
    return null;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    return nthFibo(n - 2) + nthFibo(n - 1);
  } else {
    return null;
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length > 1) {
    return capitalizeWords([array[0]]).concat(capitalizeWords(array.slice(1)));
  } else {
    return [array[0].toUpperCase()];
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length > 1) {
    return capitalizeFirst([array[0]]).concat(capitalizeFirst(array.slice(1)));
  } else {
    var word = array[0].split('');
    word[0] = word[0].toUpperCase();
    return [word.join('')];
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  for (var key in obj) {
    var value = obj[key];

    if (value % 2 === 0) {
      sum += value;
    }

    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (Array.isArray(array)) {
    var flatArr = [];

    for (var i = 0; i < array.length; i++) {
      flatArr = flatArr.concat(flatten(array[i]));
    }

    return flatArr;
  } else {
    return array;
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    var obj = {};

    for(var i = 0; i < str.length; i++) {
      obj = letterTally(str[i], obj);
    }

    return obj;
  } else {
    if(obj.hasOwnProperty(str)) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }

    return obj;
  }
};

// I: str, obj (but not always defined)
// O: obj containing tallies of each letter
// C: use recursion
// E: N/A

// Strategy

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (typeof input !== 'object') {
    return input;
  } else if (Array.isArray(input)) {
    var clonedArr = []
    for (var i = 0; i < input.length; i++) {
      clonedArr.push(clone(input[i]));
    }
    return clonedArr;
  } else {
    var clonedObj = {};
    for (var key in input) {
      clonedObj[key] = clone(input[key]);
    }
    return clonedObj;
  }
};
