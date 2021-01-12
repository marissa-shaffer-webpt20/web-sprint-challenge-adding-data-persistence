// build your `Task` model here
const db = require("../data/dbConfig")

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("p.id as project id", "t.description as task description", "t.notes as task notes", "t.completed as task completed", "p.name as project name", "p.description as project description")
}

function findById(id) {
    return db("tasks")
        .where({id})
        .first();
}

function addTask(task) {
    return db("tasks")
        .insert(task)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getTasks,
    findById,
    addTask,
}