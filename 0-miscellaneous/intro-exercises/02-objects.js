// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
    message: "Hello, earthling! I bring peace."
};

// Log the message
process.stdout.write("alienMessage = ")
console.dir(alienMessage)


// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age.
const myObject = { name: "Simon", age: 24}
process.stdout.write("myObject = ")
console.dir(myObject)


// --------------------------------------
// Exercise 3 - Add a property

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true
process.stdout.write("stackOverflow = ")
console.dir(stackOverflow)


// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = {
    description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute."
delete thisSong.description
thisSong.about = "Just a tribute"
process.stdout.write("thisSong = ")
console.dir(thisSong)

// --------------------------------------
