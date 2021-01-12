
exports.seed = async function(knex) {
  await knex('projects').insert([
      {id: 1, name: 'rowValue1', description:'desc1', completed: false},
      {id: 2, name: 'rowValue2', description:'desc2', completed: false},
      {id: 3, name: 'rowValue3', description:'desc3', completed: false},
    ])
}
