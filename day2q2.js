var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; 

//The indexOf() method returns the index of (the position 
//of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

//The replace() method replaces a specified value with another value in a string:
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

//A string is converted to upper case with toUpperCase():
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase(); 

// A string is converted to lower case with toLowerCase():
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();

//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

//The trim() method removes whitespace from both 
//sides of a string:
var str = "       Hello World!        ";
alert(str.trim()); 

//The charAt() method returns the character at a
// specified index (position) in a string:

var str = "HELLO WORLD";
str.charAt(0);     

//A string can be converted to an array with the split() method:
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|"); 





/* Array Methods   -----------------*/
//The JavaScript method toString() converts an
// array to a string of (comma separated) array values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


//The pop() method removes the last element from an array: 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  

//The pop() method returns the value that was "popped out":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();

//The shift() method removes the first array element and "shifts" all 
//other elements to a lower index.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); 

//The splice() method can be used to add new items to an array: 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//The concat() method creates a new array by merging 
//(concatenating) existing arrays:
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); 
