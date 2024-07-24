//these are fictional and not factual.
var coffee = { latte: 100, cappuccino: 50, black: 0 };  // Use consistent lowercase for property names

// Get user input
var userChoice = prompt("What type of coffee would you like? We have latte, cappuccino & black! (Make sure no capital letters or spaces yeah? Even at the end or the beginning!)").toLowerCase();  // Convert user input to lowercase

// Retrieve sugar level for the chosen coffee
var sugar = coffee[userChoice];

// Determine health rating based on sugar level
var healthRating;
if (sugar <= 0) {
  healthRating = "Good choice!";
} else if (sugar <= 50) {
  healthRating = "Decent choice!";
} else {
  healthRating = "Bad choice!";
}

// Print the coffee object, sugar level, and health rating
console.log(coffee);
console.log("Sugar level:", sugar);
console.log(healthRating);
