var brand = "MB";
const model = "E63";
let productionYear = 2012;
var preOwned = true;
// var preOwned = false;

function checkPreOwned() {
    if(preOwned == true) {
        return "PreOwned"
    }

    else {
        return "New"
    }
} 

console.log("Car's brand is " + brand + " and it's model is " + model + "." + " Production year is " + productionYear + " and it's " + checkPreOwned()+ ("."));
