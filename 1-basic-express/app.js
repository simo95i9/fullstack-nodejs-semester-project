const express = require("express")
const app = express()

app.get("/", (request, response) => {
  const object = {
    message: "Created my first route in Express.js",
  }
  response.send(object)
})

app.listen(3000)
