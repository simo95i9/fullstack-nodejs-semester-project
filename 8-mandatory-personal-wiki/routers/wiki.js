import {Router, urlencoded} from "express"
import {Temporal} from "@js-temporal/polyfill";
import {default as articles, addArticle} from "../articles/articles.js";
import {auth_provider} from "./auth.js";

export const router = Router()
router.use(urlencoded())

router.get("/", (req, res) => {
    res.render('wiki',  {wiki: {articles: [...articles.values()]}})
})

router.get("/create", auth_provider, (req, res) => {
    res.render('wiki-create')
})

router.post("/create", auth_provider, (req, res) => {
    console.dir(req.body)

    const article = {
        title: req.body.title,
        author: req.body.author,
        slug: req.body.slug,
        created: Temporal.Now.plainDateISO(),
        updated: Temporal.Now.plainDateISO(),
        content: [...Object.values(req.body.content)]
    }

    addArticle(article)

    res.redirect(`/wiki/${article.slug}`)
    // res.redirect(`/wiki/`)
})

router.get("/:slug", (req, res, next) => {
    if (!articles.has(req.params.slug))
        next();

    res.render('wiki-article', {wiki: {article: articles.get(req.params.slug)}})
})
