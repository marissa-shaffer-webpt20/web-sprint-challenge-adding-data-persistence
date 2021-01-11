const express = require("express")

const server = express()
const port = process.env.PORT || 8000

server.use(express.json())

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})