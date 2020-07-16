/* 1. Explore and explain various methods in console function*/


/*console.log()

Mainly used to log(print) the output to the console.
 We can put any type inside the log(), be it a string, 
 array, object, boolean etc.
*/
// console.log() method 
console.log('abc');  
console.log(1); 
console.log(true); 
console.log(null); 

/*console.error()

Used to log error message to the console. Useful in testing of code.
 By default the error message will be highlighted with red color.
*/
// console.error() method 
console.error('This is a simple error'); 

/* console.warn()

Used to log warning message to the console. 
By default the warning message will be highlighted with yellow color.
*/
// console.warn() method 
console.warn('This is a warning.'); 

/* console.clear()

Used to clear the console. The console will be cleared, 
in case of Chrome a simple overlayed text will be printed like :
 ‘Console was cleared’ while in firefox no message is returned.
*/
// console.clear() method 
console.clear(); 

/* console.time() and console.timeEnd()

Whenever we want to know the amount of time spend by a block or 
a function, we can make use of the time() and timeEnd() methods 
provided by the javascript console object. They take a label which 
must be same, and the code inside can be anything( function, object, simple console).
*/
// console.time() and console.timeEnd() method 
console.time('abc'); 
let fun = function(){ 
	console.log('fun is running'); 
} 
let fun2 = function(){ 
	console.log('fun2 is running..'); 
} 
fun(); // calling fun(); 
fun2(); // calling fun2(); 
console.timeEnd('abc'); 

/* console.table()

This method allows us to generate a table inside a console. 
The input must be an array or an object which will be shown as 
a table.
*/
// console.table() method 
console.table({'a':1, 'b':2}); 

/* console.count()

This method is used to count the number that the function hit by 
this counting method.
/*
// console.count() method 
for(let i=0;i<5;i++){ 
	console.count(i); 
} 

/* console.group() and console.groupEnd()

group() and groupEnd() methods of the console object allows us to 
group contents in a separate block, which will be indented. 
Just like the time() and the timeEnd() they also accepts label,
 again of same value.
*/

// console.group() and console.groupEnd() method 
console.group('simple'); 
console.warn('warning!'); 
console.error('error here'); 
console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section'); 

/* Custom Console Logs

User can add Styling to the console logs in order to make logs 
Custom . The Syntax for it is to add the css styling as a parameter 
to the logs which will replace %c in the logs as shown in the example below .
*/
// Custom Console log example 
const spacing = '10px'; 
const styles = 
		`padding: ${spacing}; background-color: white; color: green; font-style: 
		italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cGeeks for Geeks', styles); 



// 2.What is the difference between var,let,const with code examples

//VAR:
  //  The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.

//Example: 
var a =10;

/* 
    Variable declarations are processed before the execution of the code.
    The scope of a JavaScript variable declared with var is its current execution context.
    The scope of a JavaScript variable declared outside the function is global.
*/
//let
/* The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.

Example: let a =10;
*/

//const

/* const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.

Example: const a =10;
*/


// 3.Write a brief intro of data types in JavaScript

/* The String Data Type

The string data type is used to represent textual data 
(i.e. sequences of characters). Strings are created using single 
or double quotes surrounding one or more characters*/

var a = 'Hi there!'; 


//Number Data Type
/* The number data type is used to represent positive or negative 
numbers with or without decimal place, or numbers written using 
exponential notation e.g. 1.5e-4 (equivalent to 1.5x10-4).
*/
var a = 25;         
var b = 80.5;     
var c = 4.25e+6;   
var d = 4.25e-6; 

/* The Boolean Data Type 
The Boolean data type can hold only two values: true or false. 
It is typically used to store values like yes (true) or no (false),
 on (true) or off (false)
*/
var isReading = true;   
var isSleeping = false;

/* The Undefined Data Type

The undefined data type can only have one value-the special value 
undefined. If a variable has been declared, but has not been 
assigned a value, has the value undefined.
*/
var a;
var b = "Hello World!"
 
alert(a) // Output: undefined
alert(b) // Output: Hello World!

/* The Null Data Type

This is another special data type that can have only one value-the null value. A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.

A variable can be explicitly emptied of its current contents by assigning it the null value
*/
var a = null;
alert(a); // Output: null
 
var b = "Hello World!"
alert(b); // Output: Hello World!
 
b = null;
alert(b) // Output: null
/* The Object Data Type

The object is a complex data type that allows you to store 
collections of data.

An object contains properties, defined as a key-value pair. 
A property key (name) is always a string, but the value can be any 
data type, like strings, numbers, booleans, or complex data types 
like arrays, function and other objects. You'll learn more about objects in upcoming chapters.
*/
ple
Try this code »

var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
// For better reading
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}

/* The Array Data Type

An array is a type of object used for storing multiple values in 
single variable. Each value (also called an element) in an array 
has a numeric position, known as its index, and it may contain data 
of any data type-numbers, strings, booleans, functions, objects,
 and even other arrays. The array index starts from 0, so that the 
 first array element is arr[0] not arr[1].
*/
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York

/*The function is callable object that executes a block of code. 
Since functions are objects, so it is possible to assign them to 
variables
*/
var greeting = function(){ 
    return "Hello World!"; 
}
 
// Check the type of greeting variable
alert(typeof greeting) // Output: function
alert(greeting());     // Output: Hello World!

/* The typeof Operator

The typeof operator can be used to find out what type of data a variable or operand contains. It can be used with or without parentheses (typeof(x) or typeof x).

The typeof operator is particularly useful in the situations when you need to process the values of different types differently, but you need to be very careful, because it may produce unexpected result in some cases, as demonstrated in the following example:
*/
// Numbers
typeof 15;  // Returns: "number"
typeof 42.7;  // Returns: "number"
typeof 2.5e-4;  // Returns: "number"
typeof Infinity;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
