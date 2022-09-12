// Mock database
import CrudDatastore from "./cruddatastore.js"
import Weapon from "./weapon.js"
import * as Utils from "./utils.js"

const defaultWeapons = [
    new Weapon("tantō", "dagger", "15cm–30cm", undefined, "Japan", "Heian Period (794AD–1185AD) / Kamakura Period (1185–1333) ", "https://en.wikipedia.org/wiki/Tantō"),
    new Weapon("Smith & Wesson Model 686", "revolver", "2½in—8⅜in", ".357 Smith & Wesson Magnum", "United States of America", "1980", "https://en.wikipedia.org/wiki/Smith_%26_Wesson_Model_686")
]

const datastore = new CrudDatastore()
datastore.deleteAllItems()
datastore.addItems(defaultWeapons)


// All the regular express stuff
import express from "express"
const app = express()
const port = 8080

app.use(Utils.basic_logger)
app.use(express.json())

app.get("/api/v1/weapons", (req, res) => {
    const items = datastore.getAllItems()
    res.send(items)
})

app.get("/api/v1/weapons/reset", (req, res) => {
    datastore.deleteAllItems()
    datastore.addItems(defaultWeapons)
    res.send()
})

app.get("/api/v1/weapons/:id", (req, res) => {
    const item = datastore.getItemById(req.params.id)
    res.send(item)
})

app.post("/api/v1/weapons", (req, res) => {
    const item = Weapon.fromRequestBody(req.body)
    datastore.addItem(item)
    res.send(item)
})

app.put("/api/v1/weapons", (req, res) => {
    console.log("req.body = ", req.body)
    res.send()
})

app.patch("/api/v1/weapons", (req, res) => {
    console.log("req.body = ", req.body)
    res.send()
})

app.delete("/api/v1/weapons/", (req, res) => {
    datastore.deleteAllItems()
    res.send()
})

app.delete("/api/v1/weapons/:id", (req, res) => {
    datastore.deleteItemById(req.params.id)
    res.send()
})

app.listen(port, "localhost", () => { console.log("Server is running and listening on port", port) })