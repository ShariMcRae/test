//create a variable to hold the quantity of available plane seats left on a flight
var availableSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
var middleInitial = "W";

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = true;

//create a variable to hold a customer's first name
var customerFirstName = "Sally";

//create a variable to hold a street address
var streetAddress = "123 Elm St";

//print all variables to the console
console.log("availableSeats = " + availableSeats);
console.log("costOfGroceries = " + costOfGroceries);
console.log("middleInitial = " + middleInitial);
console.log("isHotOutside = " + isHotOutside);
console.log("customerFirstName = " + customerFirstName);
console.log("streetAddress = " + streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availableSeats -= 2;
console.log("availableSeats = " + availableSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries += 2.15;
console.log("costOfGroceries = " + costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "P";
console.log("middleInitial = " + middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log("isHotOutside = " + isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + " " + middleInitial + " Smith";
console.log("fullName = " + fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi! My name is " + fullName + " and I live at " + streetAddress + ".");
