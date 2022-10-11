import express from "express"
import { Temporal } from '@js-temporal/polyfill'

const app = express()
const port = 3000

app.set("views", "./views");
app.set("view engine", "ejs")

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded())

import {pokemonRouter} from "./routers/pokemon.js"
app.use("/pokemon/", pokemonRouter)

const templateOptions = {
    footer: {copyrightYear: Temporal.Now.plainDateISO().year}
}

app.get("/", (req, res) => {
    res.render("index", {...templateOptions})
})

app.get("/contact", (req, res) => {
    res.render("contact", {...templateOptions})
})

app.post("/contact", async (req, res) => {
    res.redirect("/contact")
    console.log(req.body)
})

app.listen(port, () => { console.log("Server is running on port ", port) })