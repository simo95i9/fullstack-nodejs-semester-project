import {Router} from "express";
import {Temporal} from "@js-temporal/polyfill";

const router = Router()

const templateOptions = {
    footer: {copyrightYear: Temporal.Now.plainDateISO().year}
}

router.get("/", (req, res) => {
    res.render("pokemon", {...templateOptions})
})

router.get("/:name/", (req, res) => {
    console.log([req.params.name])
    res.render("pokemon", {...templateOptions, pokemon: [req.params.name]})
})

router.get("/:name1/:name2", (req, res) => {
    console.log([req.params.name1, req.params.name2])
    res.render("pokemon", {...templateOptions, pokemon: [req.params.name1, req.params.name2]})
})

export const pokemonRouter = router