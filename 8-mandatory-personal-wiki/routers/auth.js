import {Router, urlencoded} from "express"

export const router = Router()

router.use(urlencoded())

router.get("/", auth_provider, (req, res) => {
    res.render("auth")
})

router.get("/", (req, res) => {
    res.render("auth")
})


router.post("/signout", (req, res) => {
    if (!("auth" in req.session)) {
        res.statusCode(401).render("auth")
        return
    }

    delete req.session.auth
    res.render("auth")
})

router.post("/signin", (req, res) => {
    if (req.body.email !== "simon@gred.al" || req.body.password !== "password") {
        next("route")
        return
    }

    req.session.auth = {user: {name: "Simon Gredal"}}
    res.redirect("/auth/")
})

router.post("/signup", (req, res) => {

})


export function auth_provider(req, res, next) {
    if (!("auth" in req.session)) {
        next('route')
        return
    }

    res.locals.auth = req.session.auth
    next()
}