import { default as express, Router } from "express"

const router = Router()

router.use(express.urlencoded({extended: true}))

router.post("/", (req, res) => {
    console.dir(req.body)
    setTimeout(() => {
        res.status(200).send()
    }, 1000)
})

export default router