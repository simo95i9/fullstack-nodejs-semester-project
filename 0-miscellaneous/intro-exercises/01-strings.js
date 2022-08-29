// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOneAsFloat = Number.parseFloat(numberOne)
const numberTwoAsFloat = Number.parseFloat(numberTwo)
const sum = numberOneAsFloat + numberTwoAsFloat
console.log(`sum = ${sum}`)


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneAsFloat = Number.parseFloat(anotherNumberOne)
const anotherNumberTwoAsFloat = Number.parseFloat(anotherNumberTwo)
const anotherSum = anotherNumberOneAsFloat + anotherNumberTwoAsFloat
console.log(`anotherSum = ${anotherSum.toFixed(2)}`)


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3
console.log(`average = ${average}`)



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(`letters[2] = ${letters[2]}`)



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const betterFact = fact.replace("javascript", "Javascript")
console.log(`betterFact = ${betterFact}`)


// --------------------------------------
