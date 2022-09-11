const express = require("express")
const app = express()

app.get("/", (request, response) => {
    const object = {
        message: "Created my first route in Express.js",
    }
    response.send(object)
})


// TASK: Make a cups route
app.get("/cups", (req, res) => {
    res.send({
        small: "https://www.barista-pro.com/wp-content/uploads/2020/02/Ancap-Verona-75-ml-Espresso-Cup-2.jpg",
        medium: "https://www.pricerunner.dk/product/1200x630/1605864733/Rosendahl-Grand-Cru-Soft-Kaffekop-28-cl.jpg",
        large: "https://i.pinimg.com/originals/39/69/ff/3969ff0bceb97be1ef96a49f81a0607e.jpg"
    })
})

app.get("/deers", (req, res) => {
    res.send({size: "BIG"})
})

app.get("/deers/:id", (req, res) => {
    console.dir(req.params)
    if (req.params.id === "1") {
        res.send({name: "bambi"})
    } else {
        res.send({error: "Unknown deer"})
    }
})

app.get("/actors", (req, res) => {
    console.dir(req.query.name)
    res.send({message:"Information about the actor", ...req.query})
})


app.listen(3000, "localhost", () => { console.log("Server is running and listening on port", 3000) })
