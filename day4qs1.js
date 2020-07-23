/* Create a for loop that iterates up to 100 while outputting "fizz"
at multiple of 3,"buzz" at multiple of 5 and "fizzbuzz" at 
multiple of 3 and 5 */
for(i=0;i<100;i++){
    if (i%15 == 0){
        console.log('fizzbuzz')
        continue
    }
    else if(i%3 == 0){
        console.log("fizz")
        continue
    }
    else if(i%5 ==0){
        console.log("buzz")
        continue
    }
    else{
        console.log(i)
    }
}