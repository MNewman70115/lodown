'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes a value and returns it unchanged
 * 
 * @param {Any Value} value: the value that the function returns
 *
 * @return {Any Value} value: the input value returned unchanged
 * 
 */

function identity(value) {
   return value;
}
module.exports.identity = identity;

/**
 * typeOf: determines the type of value inputted
 * 
 * @param {Any Value} value: the value that the function evaluates
 *
 * @return {String}: the type of value returned as a string
 * 
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    if (value === null) {
        return 'null';
    }
    return typeof(value);
}
module.exports.typeOf = typeOf;

/**
 * first: if an array and number are entered as arguments, it returns new array 
 * containing number of elements from beginning of array in a new array. it
 * returns an empty array if the array argument at function call isn't an array
 * or if the number argument at function call is less than 0. it returns the 
 * value at the zero index of the array argument at function call if there is no
 * number argument at function call.
 * 
 * @param {Any Array} array : the array from which the function tries to return 
 * the first number of values 
 * @param {Any Number} number : the number of elements from beginning of array 
 * to copy into a new array 
 *
 * @return result: the array created by function to house the first number of 
 * elements from the array argument at function call
 */

function first(array, number) {    
    let result = [];
    if (!Array.isArray(array) || number < 0) {
            return [];
    } else if (number === undefined) {
            return array[0];
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i <= number - 1) {
                result.push(array[i]);
            }
        }
    }
    return result;
}
module.exports.first = first;

/**
 * last: if an array and number are entered as arguments, it returns new array 
 * containing number of elements from end of array in a new array. it returns an
 * empty array if the array argument at function call isn't an array or if the
 * number argument at function call is less than 0. it returns the array 
 * argument at function call if the number argument at function call is greater 
 * than the length of the array argument.
 * 
 * @param {Any Array} array : the array from which the function tries to return 
 * the last number of values 
 * @param {Any Number} number : the number of elements from end of array to copy
 * into a new array 
 *
 * @return result: the array created by function to house the last number of 
 * elements from the array argument at function call
 */

function last(array, number) {
    let result = [];
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if(number > array.length) {
        return array;
    } else if (number === undefined) {
        return array[array.length - 1];
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i >= number -1) {
                result.push(array[i]);
            }
        }
    }
    return result;
}
module.exports.last = last;

/**
 * indexOf: returns the index from array from first value match if none returns 
 * -1
 * 
 * @param {Any Array} array : the array whose values at index the function 
 * attempts to match to the value 
 * @param {Any Value} value : a value to be compared to each index of the array 
 *
 * @return {Index Number} number: the first index that that value at it matches 
 * the value at function call
 */

function indexOf(array,value) {
    console.log(array[1]);
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } 
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: returns true first time values match or false if they don't
 * 
 * @param {Any Array} array : the array whose values at index the function 
 * attempts to match to the value 
 * @param {Any Value} value : a value to be compared to each index of the array 
 *
 * @return {boolean} true: if the value at function call is found in the array 
 * at function call, returns true
 */

function contains(array,value) {
    return indexOf(array,value) >= 0 ? true: false;
}
module.exports.contains = contains;

/**
 * unique: creates new array with all the unique elements from array
 * 
 * @param {Any Array} array : the array whose values are copied to a new array 
 * if they are not already in it
 * 
 * @return {New Array} result: an array that contains all of the unique values 
 * in the array argument at function call
 */

function unique(array) {
    const result = [];
    for (var i = 0; i < array.length; i++) {
        if(result.indexOf(array[i]) === -1 && array[i] !== '') {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.unique = unique;

/**
 * filter: returns a new array of true values
 * 
 * @param {Any Array} array : the array whose values at index are entered into a
 * function 
 *
 * @return {New Array} result: an array containing all of the input array's 
 * index values that returned true from the internal function
 */

function filter(array, func) {
    const result = [];
    for (var i = 0; i <array.length; i++) {
        if (func(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.filter = filter;

/**
 * reject: returns a new array of false
 * 
 * @param {Any Array} array : the array whose values at index are entered into a
 * function 
 *
 * @return {New Array} result: an array containing all of the input array's 
 * index values that returned false from the internal function
 */

function reject(array,func) {
   const result = filter(array, function (element, index, collection){
       return !func(element, index, collection);
   });
   return result;
}
module.exports.filter = filter;

/**
 * partition: returns a new array that contains two arrays: one with true values
 * & one witrh false values
 * 
 * @param {Any Array} array : the array whose values at index are entered into a
 * function 
 *
 * @return {New Array} result: an array that contains two arrays: one contains 
 * all the values that returned true and the other false
 */

function partition(array, func) {
    const result = [];
    result.push(filter(array,func), reject(array,func));
    return result;
}
module.exports.partition = partition;

/**
 * map: returns array with all the results of running a functiuon on an array
 * 
 * @param {Any Array or Object}  collection: the array whose values at index or 
 * the object whose values at key are entered into a function
 * @param {Any Function} action: the function that is run using the values from 
 * the array or object above
 *
 * @return {New Array} result: an array that contains the results of running the
 * action on the array or object at function call
 */

function map(collection, action) {
    const result = [];
    each(collection, function(element, index, collection) {
        result.push(action(element, index, collection));
    });
   return result;
}
module.exports.map = map;

/**
 * pluck: returns an array that contains every value at key that matches 
 * property
 * 
 * @param {An Array of Objects}  array: an array that contains objects 
 * @param {Any String} prop: a string that is to be matched against the keys in 
 * the objects in the above array
 *
 * @return {New Array} array: an array that contains the values at the keys in 
 * the input array of objects that matched the prop
 */

function pluck(array, prop) {
    return map(array, function(element, index, collection) {
        return element[prop];
    });
}
module.exports.pluck = pluck;

/**
 * every: returns true if every iterative function call is true or every value 
 * in array is truthy or false if any function call or value is false/falsy
 * 
 * @param {Any Array or Object}  collection: the array whose values at index or 
 * the object whose values at key are entered into a function
 * @param {Any Function} func: the function that is run using the values from 
 * the array or object above
 *
 * @return {boolean} true: returns true if func returns true for every element 
 * in the array or object or if no func arg at call, returns true if every 
 * element in array or object is truthy
 */

function every(collection, func) {
    func = func || identity();
    let result = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(func(collection[key], key, collection));
        }
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i] === false || !!result[i] === false) {
            return false;
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: returns false if every iterative function call is false or every value in
 * array is falsy or true if any function call or value is true/truthy
 * 
 * @param {Any Array or Object}  collection: the array whose values at index or 
 * the object whose values at key are entered into a function
 * @param {Any Function} func: the function that is run using the values from 
 * the array or object above
 *
 * @return {boolean} false: returns false if func returns false for every 
 * element in the array or object or if there is no func parameter at call,
 * returns false if every element in array or object is falsy
 */

function some(collection, func) {
    func = func || identity();
    let result = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(func(collection[key], key, collection));
        }
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i] === true || !!result[i] === true) {
            return true;
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: a function that uses the previous returned value until all the elements from array have been run through the function
 * and then returns one final returned value 
 * 
 * @param {Any Array}  array: the array whose values at index are entered into a
 * function
 * @param {Any Function} func: the function that is run using the values from 
 * the array above
 * @param {Any value} seed: a value that is used by func at first iteration and 
 * is replaced by the previous return value of func at next iteration
 *
 * @return {Any Value} value: returns the returned value from func at final 
 * iteration 
 */

function reduce(array, func, seed){
    if (seed !== undefined){
    for(var j = 0; j < array.length; j++){
        seed = func(seed, array[j], j);
    }
  } else if(seed === undefined){
      seed = array[0];
      for(var i = 1; i < array.length; i++){
        seed = func(seed, array[i], i);
      }
  } 

    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: adds the contents of a potentially infinite number of objects to the
 * first object
 * 
 * @param {Any Object}  obj1, ...obj2: the first object and all subsequent 
 * objects whose contents need to be added to the first object 
 *
 * @return {Object} obj1: the newly expanded first object with every passed 
 * objects values in order of pass 
 */

function extend(obj1, ...obj2){
    for(var i = 0; i < obj2.length; i++){
        for(var key in obj2[i]){
            obj1[key] = obj2[i][key]; 
        }
    } return obj1;
}
module.exports.extend = extend;