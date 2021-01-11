// build your `/api/projects` router here
const express = require("express")
const project = require("./model")

const router = express.Router()

//GET PROJECTS
router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

//CREATE PROJECT
router.post('/projects', (req, res) => {
    const projectData = req.body;

    project.addProject(projectData)
        .then(project => {
        res.status(201).json(project);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
    });
})

module.exports = router