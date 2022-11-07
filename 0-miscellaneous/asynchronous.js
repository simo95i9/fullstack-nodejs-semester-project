function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        const coin_toss = Math.round(Math.random());

        setTimeout(() => {

            if (coin_toss) {
                resolve("Something Good")
            } else {
                reject("Something Bad")
            }
        }, 3000)
    })
}

function delay(delay) {
    const start = Date.now()
    let stop = Date.now()

    while (stop - start < delay) {
        stop = Date.now()
    }
}

somethingGoodSomethingBad()
    .then(success => {
        console.log("Everything went well: ", success)
    })
    .catch(error => {
        console.log("Everything went badly: ", error)
    })

console.log("Hello World!")




function howAmI(name) {
    return new Promise((resolve, reject) => {
        const coin_toss = Math.round(Math.random());

        if (coin_toss) {
            resolve(`${name} is based`)
        } else {
            reject(`${name} is cringe`)
        }
    })
}

howAmI("Simon").then(s => console.log(s)).catch(e => console.log(e))

