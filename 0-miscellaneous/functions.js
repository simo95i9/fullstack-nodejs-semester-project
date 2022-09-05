function genericActionExecutor(callback) {
    const parameters = [...arguments]           // use the arguments object to get the list of all the arguments provided to the function
    parameters.shift()                          // remove the first element, which is the anyCallbackFunction object
    return callback(...parameters)   // call the callback with whatever extra parameters was given when genericActionExecutor was called
}

const spitting = (name) => `${name} is spitting.`

// ----------------------------------------------------------------------------
// TASK: Write a single line below without changing the above.
//  The output to the terminal should be: 'Amanda is spitting'.
//  Don't call spitting directly.

console.log(genericActionExecutor(spitting, "Amanda"))


// ----------------------------------------------------------------------------
// TASK: create a function that allow Malthe to shoot and call it
//  result should be: 'Malthe is shooting".

const shoot = (name, weapon) => `${name} is shooting their ${weapon}`
console.log(genericActionExecutor(shoot, "Malthe", "revolver"))


// ----------------------------------------------------------------------------
// TASK: Create a *single* statement below that logs: 'Murat is running away'

console.log(genericActionExecutor((name) => `${name} is running away`, "Murat"))
