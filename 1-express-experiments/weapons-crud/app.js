// Mock database
const CrudDatastore = require("./cruddatastore")
const Weapon = require("./weapon")

const datastore = new CrudDatastore()
datastore.addItems([
    new Weapon("tantō", "dagger", "15cm–30cm", undefined, "Japan", "Heian Period (794AD–1185AD) / Kamakura Period (1185–1333) ", "https://en.wikipedia.org/wiki/Tantō"),
    new Weapon("Smith & Wesson Model 686", "revolver", "2½in—8⅜in", ".357 Smith & Wesson Magnum", "United States", "1980", "https://en.wikipedia.org/wiki/Smith_%26_Wesson_Model_686")
])


// All the regular express stuff
const express = require("express")
const app = express()

app.get("/weapons", (req, res) => {
    res.send(datastore.getAllItems())
})

app.get("/weapons/:id", (req, res) => {
    res.send(datastore.getItemById(req.params.id))
})

app.listen(3000, "localhost", () => { console.log("Server is running and listening on port", 3000) })