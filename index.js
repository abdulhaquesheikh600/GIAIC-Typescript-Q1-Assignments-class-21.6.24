// Q1- Write a function checkEvenOdd// that accepts a number/ and prints whether it is even or odd/
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("".concat(num, " is even number"));
    }
    else {
        console.log("Q1-".concat(num, " is odd number"));
    }
}
checkEvenOdd(11);
// Q2.Write a function arrayOperations/ that creates an array of numbers/, 
// adds a number to the end of the array/, removes the first number, and prints the modified array.
function arrayOperations() {
    // Step 1: Create an array of numbers
    var numbers = [1, 2, 3, 4, 5];
    console.log("Q2-Origional array is, ".concat(numbers));
    // Step 2: Add a number to the end of the array,now update array
    numbers.push(6);
    console.log("Q2-After adding 6 at the end, array is, ".concat(numbers));
    numbers.shift();
    console.log("Q2-After removing the first number , array is, ".concat(numbers));
    // prints the modified array.
    console.log("Q2-modified array is, ".concat(numbers));
}
arrayOperations();
