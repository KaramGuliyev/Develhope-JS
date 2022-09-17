// Create a variable called age and assign it a numeric value. 
// Use the Conditional (ternary) operator. If the variable is grater or equal to 18, 
// print You can drive a car. If the variable is less than 18, print You are too young to drive.

var age = 22;

function ageChecker() {
    return ( age >=18 ? "You are allowed to drive!" : "Sorry, you can only drive shopping carts :(" )
}

console.log(ageChecker());
