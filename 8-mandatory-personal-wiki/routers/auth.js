import {Router, urlencoded} from "express"

const users = new Map()
// Don't actually do any of this
const me = {email: "simon@gred.al", password: "password", name: "Simon"}
users.set(me.email, me)

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
    if (!users.has(req.body.email)) {
        res.send("error: no such user")
        return
    }

    if (users.get(req.body.email).password !== req.body.password) {
        res.send("error: bad credentials")
        return
    }


    req.session.auth = {user: users.get(req.body.email)}
    res.redirect("/auth/")
})

router.post("/signup", (req, res) => {
    if (users.has(req.body.email)) {
        res.send("error: user already exists")
        return
    }

    // Don't actually do any of this
    const user = {email: req.body.email, password: req.body.password, name: req.body.name}
    users.set(user.email, user)

    req.session.auth = {user}
    res.redirect("/auth/")
})


export function auth_provider(req, res, next) {
    if (!("auth" in req.session)) {
        next('route')
        return
    }

    res.locals.auth = req.session.auth
    next()
}