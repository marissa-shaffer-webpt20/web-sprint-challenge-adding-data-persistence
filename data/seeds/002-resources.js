
exports.seed = async function(knex) {
  await knex('resources').insert([
    {id: 1, name: 'Computer', description: 'hardware to code on'},
    {id: 2, name: 'VS Code', description: 'coding tool'},
    {id: 3, name: 'Desk', description: 'surface to put computer on and to work or do homework'},
    {id: 4, name: 'Office', description: 'quiet workspace'},
    {id: 5, name: 'Lambda Student', description: 'a student learning web development'},
  ])
}
