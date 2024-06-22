// Q1- Write a function checkEvenOdd// that accepts a number/ and prints whether it is even or odd/

function checkEvenOdd(num:number){
    if(num % 2 == 0){
        console.log(`${num} is even number`)
    }else{
        console.log(`Q1-${num} is odd number`)
    }

}

checkEvenOdd(11);


// Q2.Write a function arrayOperations/ that creates an array of numbers/, 
// adds a number to the end of the array/, removes the first number, and prints the modified array.

function arrayOperations():void{
    // Step 1: Create an array of numbers
    let numbers= [1,2,3,4,5];

console.log(`Q2-Origional array is, ${numbers}`);

// Step 2: Add a number to the end of the array,now update array

numbers.push(6);
console.log(`Q2-After adding 6 at the end, array is, ${numbers}`);

numbers.shift();
console.log(`Q2-After removing the first number , array is, ${numbers}`);


// prints the modified array.
console.log(`Q2-modified array is, ${numbers}`);


}

arrayOperations();