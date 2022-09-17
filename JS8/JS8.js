// Create a variable and set it as true.
// Print the value in the console and the data type.
// Convert it to a numeric data type, print the value and the data type.
// Convert it to string data type, print the value and the data type.
// Finally, convert it to a boolean data type, print the value and the data type.



var defaultVariable = true;

console.log(defaultVariable);

defaultVariable = 1738;
console.log("Default Variable is " + defaultVariable + " and it's type of " + typeof(defaultVariable));

defaultVariable = "Karam Guliyev"
console.log("My name is " + defaultVariable + " and this log's type is " + typeof(defaultVariable));

defaultVariable = true;

function checkIfUserWorthTime() {
    if (defaultVariable == true) {
        return "YES IT IS";
    }
    else {
        return "*Sad Music Plays*";
    }
}

console.log("Does this user worth  your time? Answer is : " +checkIfUserWorthTime());

