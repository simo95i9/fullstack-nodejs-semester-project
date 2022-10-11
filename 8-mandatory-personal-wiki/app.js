import articles from "./articles/articles.js"

import {Temporal} from "@js-temporal/polyfill"

const templateOptions = {
    footer: { copyrightYear: Temporal.Now.zonedDateTimeISO().year}
}

import express from "express"
const app = express()
const port = process.env.PORT ?? 3000

app.use(express.static("public"))
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {...templateOptions})
})

app.get("/wiki/", (req, res) => {
    const wikiOptions = {
        articles: [...articles.values()]
    }

    res.render('wiki', {...templateOptions, wiki: wikiOptions})
})

app.get("/wiki/:slug", (req, res, next) => {
    if (!articles.has(req.params.slug))
        next();

    const wikiOptions = {
        article: articles.get(req.params.slug)
    }

    res.render('wiki', {...templateOptions, wiki: wikiOptions})
})

app.use((req, res, next) => {
    res.status(404).render("404", {...templateOptions})
})

app.listen(port, () => { console.log("express listening on port", port)})