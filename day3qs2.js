/* Write a program which will take Os name and version from user 
separated by a space .Then log os name and version on the console.*/
let inp = prompt("Enter the Os name and version separated by space")
var x =(inp.split(' '))
console.log("The OS name is "+x[0]+" and version is "+x[1])