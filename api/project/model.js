// build your `Project` model here
const db = require("../data/dbConfig")

function getProjects() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where({id})
        .first();
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then(id => {
            return findById(id[0]);
        });
}

function resourcesByProject(id) {
    return db("projects as p")
        .where("p.id", id)
        .join("resources as r", "r.project_id", "p.id")
        .select("r.name", "r.description")
}

module.exports = {
    getProjects,
    findById,
    addProject,
    resourcesByProject,
}