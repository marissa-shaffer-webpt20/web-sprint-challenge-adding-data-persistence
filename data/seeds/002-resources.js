
exports.seed = async function(knex) {
  await knex('resource').insert([
    {resource_id: 1, resource_name: 'Computer', resource_description: 'hardware to code on'},
    {resource_id: 2, resource_name: 'VS Code', resource_description: 'coding tool'},
    {resource_id: 3, resource_name: 'Desk', resource_description: 'surface to put computer on and to work or do homework'},
    {resource_id: 4, resource_name: 'Office', resource_description: 'quiet workspace'},
    {resource_id: 5, resource_name: 'Lambda Student', resource_description: 'a student learning web development'},
  ])
}
