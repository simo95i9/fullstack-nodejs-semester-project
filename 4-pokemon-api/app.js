import express from "express"

const app = express()
const port = 8080

app.use(express.static("./public"))

app.get("/pokemon/:name", (req, res) => {
    res.send({name: req.params.name})
})

app.listen(port, () => { console.log("Server is running on port ", port) })