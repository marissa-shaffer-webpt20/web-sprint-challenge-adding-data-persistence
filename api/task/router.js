// build your `/api/tasks` router here
const express = require("express")
const task = require("./model")

const router = express.Router()

//GET TASKS
router.get("/tasks", async (req, res, next) => {
    try {
        const tasks = await task.getTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

//CREATE TASK
router.post('/task', (req, res) => {
    const taskData = req.body;

    task.addTask(taskData)
        .then(task => {
        res.status(201).json(task);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
    });
})

module.exports = router