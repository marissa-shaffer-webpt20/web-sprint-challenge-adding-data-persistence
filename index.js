const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./api/project")
const resourceRouter = require("./api/resource")
const taskRouter = require("./api/task")

const server = express()
const port = process.env.PORT || 8000

server.use(helmet())
server.use(express.json())

server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.get("/", (req, res) =>{
    res.send("Sprint DB API for Lambda")
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})