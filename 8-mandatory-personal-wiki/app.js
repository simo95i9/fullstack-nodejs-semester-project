import { auth } from "./utils.js"
import {Temporal} from "@js-temporal/polyfill"
import {article as about_article} from "./articles/about.js"
import express from "express"
import {router as wikiRouter} from "./routers/wiki.js"
import {router, router as authRouter} from "./routers/auth.js"
import session from "express-session";

3
const app = express()
const host = process.env.HOST ?? "localhost"
const port = process.env.PORT ?? 3000

app.set("view engine", "ejs")

const options = {secret: process.env.SESSION_SECRET ?? "secret"}
app.use(session(options))
app.use(express.static("public"))
app.use(express.json())

app.use("/auth", authRouter)
app.use("/wiki", wikiRouter)


app.locals = {
    footer: { copyrightYear: Temporal.Now.zonedDateTimeISO().year}
}

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about/", (req, res) => {
    res.render("about", {about: { article: about_article }})
})

app.use((req, res, next) => {
    res.status(404).render("404")
})


app.listen(port, host, () => { console.log(`express listening on ${host}:${port}`)})
