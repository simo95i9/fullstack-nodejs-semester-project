import express from 'express'
import { incrementVisitorCounter } from './geocities.js'

const app = express()
const port = 3000


app.use((req, res, next) => {
    console.log(`${req.method}\t${req.path}`)
    next()
})

app.use((req, res, next) => {
    console.log(`Visitors since server started ${incrementVisitorCounter()}`)
    next()
})

app.use("/", express.static("public"))

app.listen(port, 'localhost', () => console.log('Express is listening on port', port))
