//Destructure the following object
const student = {
    name : "Helsinki",
    age : 24,
    projects :{
        diceGame :"Two player dice game using javascript"
    }

}
const {
    name :n , age:a,projects:p
} = student;
console.log(n)
console.log(a)
console.log(p)
