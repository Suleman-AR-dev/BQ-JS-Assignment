// ---- task 1 ----

var zakatPercentage = 0.025;
var userInput = Number(prompt("Enter your total wealth in PKR")); // take input from user and convert it to a number
var result = zakatPercentage * userInput; // calculate zakat value
alert("Your zakat value is"+" "+result+"PKR"); // display zakat value in an alert message


// ---------  task 2 ---------

// Ask user to enter total number of family members
var familyMembers = prompt("Please enter the total number of family members:");

// Ask user to select a fitrah method and store the selected method and price in variables
var fitrahMethod = prompt("Please select a fitrah method:\n1. Food (per person): $7\n2. Cash (per person): $10\nEnter 1 or 2:");
let methodPrice;
if (fitrahMethod === "1") {
  methodPrice = 7;
} else if (fitrahMethod === "2") {
  methodPrice = 10;
} else {
  alert("Invalid input. Please try again.");
}

// Calculate the fitrah amount
if (methodPrice) {
  var fitrahAmount = methodPrice * familyMembers;
  alert("The calculated fitrah amount is: $" + fitrahAmount);
}

// ---------  task 3 ---------

// Generate a random number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to enter a guess for the secret number
var userGuess = prompt("Guess the secret number (between 1 and 10):");

// Check if the user's guess matches the secret number
if (userGuess == secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else if (userGuess < secretNumber) {
  alert("Sorry, your guess is too low. Please guess again.");
} else if (userGuess > secretNumber) {
  alert("Sorry, your guess is too high. Please guess again.");
} else {
  alert("Invalid input. Please try again.");
}

// ----------- task 4 ---------


// Ask the user to enter a name
var username = prompt("Please enter your name:");

// Capitalize the first letter of the name
var capitalized = username.charAt(0).toUpperCase() + username.slice(1);

// Display the capitalized name
alert("Your name in capitalized case is: " + capitalized);



// ----------- task 5 ---------


var contactNumbers = []; // create an empty array for contact numbers
var contactNames = []; // create an empty array for contact names

var numOfContacts = Number(prompt("How many contacts would you like to add?")); // prompt the user to enter the number of contacts they want to add and convert it to a number

for (let i = 0; i < numOfContacts; i++) { // loop through each contact and add them to the arrays
  var number = prompt(`Enter contact number ${i + 1}:`); // prompt the user to enter the contact number
  var name = prompt(`Enter contact name ${i + 1}:`); // prompt the user to enter the contact name
  
  contactNumbers.push(number); // add the contact number to the array
  contactNames.push(name); // add the contact name to the array
}

console.log("Contact Numbers:"); // log the heading for the contact numbers list
for (let i = 0; i < contactNumbers.length; i++) { // loop through the contact numbers array and log each element to the console
  console.log(`${i + 1}. ${contactNumbers[i]}`);
}

console.log("Contact Names:"); // log the heading for the contact names list
for (let i = 0; i < contactNames.length; i++) { // loop through the contact names array and log each element to the console
  console.log(`${i + 1}. ${contactNames[i]}`);
}


// ----------- task 6 ---------


const products = ["Shirt", "Pants", "Shoes", "Watch", "Sunglasses"]; // create an array of products

const position = Number(prompt(`Enter the position (1 to ${products.length}) of the product you want to remove:`)); // prompt the user for input and convert it to a number

if (position < 1 || position > products.length || isNaN(position)) { // check if the input is valid
  console.log("Invalid input. Please enter a valid position."); // log an error message to the console if the input is invalid
} else {
  const removedItem = products.splice(position - 1, 1)[0]; // remove the item at the specified position and store it in a variable
  console.log(`Removed item: ${removedItem}`); // log the removed item to the console
  console.log(`Remaining items: ${products.join(", ")}`); // log the updated array to the console
  console.log(`Total number of items remaining: ${products.length}`); // log the number of items remaining to the console
}


// ---- task 7 --------


var nationality = prompt("What is your nationality?");
var gender = prompt("What is your gender?");
var age = prompt("What is your age?");

if (nationality === "pakistani","Pakistani" || nationality === "indian","Indian") {
  if (gender === "male") {
    if (age >= 18) {
      alert("You are eligible to vote!");
    } else {
      alert("You are not eligible to vote.");
    }
  } else if (gender === "female") {
    if (age >= 18) {
      let married = prompt("Are you married? (yes/no)");
      if (married === "yes") {
        alert("You are eligible to vote!");
      } else {
        alert("You are not eligible to vote.");
      }
    } else {
      alert("You are not eligible to vote.");
    }
  } else {
    alert("Invalid gender.");
  }
} else {
  alert("You are not eligible to vote.");
}



// ----------- task 8 ---------

var WorldCupSquad = ['Babar Azam', 'Fakhar Zaman', 'Imam-ul-Haq', 'Mohammad Rizwan', 'Sarfaraz Ahmed', 'Shoaib Malik', 'Asif Ali', 'Shadab Khan', 'Imad Wasim', 'Shaheen Afridi', 'Haris Rauf', 'Hasan Ali', 'Mohammad Nawaz', 'Mohammad Hasnain', 'Usman Qadir'];

var finalTeam = WorldCupSquad.slice(0, 11); // creates a new array with the first 11 players from the WorldCupSquad array

console.log(finalTeam); // output: ['Babar Azam', 'Fakhar Zaman', 'Imam-ul-Haq', 'Mohammad Rizwan', 'Sarfaraz Ahmed', 'Shoaib Malik', 'Asif Ali', 'Shadab Khan', 'Imad Wasim', 'Shaheen Afridi', 'Haris Rauf']
