const express = require("express")
const app = express()


app.get("/route", (req, res) => {
    res.send({key: "value"})
})

app.listen(3000, () => { console.log("Server is running and listening on port", 3000) })