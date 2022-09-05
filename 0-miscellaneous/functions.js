function genericActionExecutor(anyCallbackFunction, name) {
    return anyCallbackFunction(name)
}

const spitting = (name) => `${name} is spitting.`

// TASK: Write a single line below without changing the above.
//  The output to the terminal should be: 'Amanda is spitting'.
//  Don't call spitting directly.

console.log(genericActionExecutor(spitting, "Amanda"))