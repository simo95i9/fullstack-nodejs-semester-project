import express from "express";

import { handler as svelte } from "../build/handler.js"
import { default as pokemon } from "./routers/pokemon.js"
import { default as contact } from "./routers/contact.js"

const app = express()

const host = process.env.EXPRESS_HOST ?? "localhost"
const port = process.env.EXPRESS_PORT ?? 3000



app.use("/api/v1/pokemon", pokemon)
app.use("/api/v1/contact", contact)

app.use(express.static("public"))
app.use(svelte)

app.listen(port, host, () => console.log(`express server ready, listening on ${host}:${port}`))