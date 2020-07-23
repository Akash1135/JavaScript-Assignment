//Write a pgm to take marks as input from user and grade him accordingly.Use Conditional statements .
//Also the same code using switch or ternary

let marks = prompt("Enter the marks")
if ((marks>85)&& (marks<=100)){
    console.log("Marks are "+marks+" and grade is A")

}
else if(marks>=50){
    console.log("Marks are "+marks+" and grade is B")
}
else{
    console.log("Marks are "+marks+" and grade is C")
}