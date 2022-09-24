import * as utils from "./utils.js"
import { Temporal } from '@js-temporal/polyfill'

// Setup data
import CrudDatastore from "./cruddatastore.js";
import Countdown from "./countdown.js";
const datastore = new CrudDatastore()
const defaultCountdowns = [
    new Countdown(
        "🥳 New Year 2023 in Denmark 🥳",
        "You definitely don't want to miss this party! 🍾🎆",
        "Simon Gredal",
        Temporal.Now.zonedDateTimeISO(),
        Temporal.ZonedDateTime.from({year: 2023, month: 1, day: 1, timeZone: "Europe/Copenhagen"})
    )
]
datastore.deleteAllItems()
datastore.addItems(defaultCountdowns)

// Setup Express
import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.use(utils.basic_logger())
app.use(express.json())
// app.use("/api/", utils.input_sanitizer())
app.use(express.static("./public"))

app.get("/api/v1/countdowns", (req, res) => {
    const items = datastore.getAllItems()
    res.send(items)
})

app.get("/api/v1/countdowns/reset", (req, res) => {
    datastore.deleteAllItems()
    datastore.addItems(defaultCountdowns)
    res.send()
})

app.get("/api/v1/countdowns/:id", (req, res) => {
    const item = datastore.getItemById(req.params.id)

    if (item === null) {
        res.status(404).send()
        return
    }

    res.send(item)
})

app.post("/api/v1/countdowns", (req, res) => {
    const item = Countdown.fromRequestBody(req.body)

    if (item === null) {
        res.status(400).send()
        return
    }

    datastore.addItem(item)
    res.send(item)
})

app.put("/api/v1/countdowns", (req, res) => {
    const item = Countdown.fromRequestBody(req.body)

    if (item === null) {
        res.status(400).send()
        return
    }

    datastore.addItem(item)
    res.send(item)
})

app.patch("/api/v1/countdowns/:id", (req, res) => {
    const item = datastore.getItemById(req.params.id)

    Object.entries(req.query)
        .filter(([key, value]) => Countdown.prototype.hasOwnProperty(key))
        .forEach(([key, value]) => item[key] = value)

    res.send(item)
})

app.delete("/api/v1/countdowns/", (req, res) => {
    const items = datastore.deleteAllItems()
    res.send(items)
})

app.delete("/api/v1/countdowns/:id", (req, res) => {
    const items = datastore.deleteItemById(req.params.id)
    res.send(items)
})

app.listen(port, () => console.log("Server is listening on port", port))
