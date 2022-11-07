import { default as express, Router } from "express"
import { send }  from "../lib/emailer.js";

const router = Router()

router.use(express.json())

router.post("/", async (req, res) => {
    const mail = {
        from: req.body.email,
        to: 'alexandro36@ethereal.email',
        subject: `Pokemon Battle Form: ${req.body.subject}`,
        text: req.body.message
    }

    const status = await send(mail)

    if (status.rejected.length > 0)
        res.status(400)

    res.send()
})

export default router