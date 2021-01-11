
exports.seed = async function(knex) {
  await knex('resource').insert([
      {project_id: 1, project_name: 'rowValue1', project_description:'desc1', project_completed: false},
      {project_id: 2, project_name: 'rowValue2', project_description:'desc2', project_completed: false},
      {project_id: 3, project_name: 'rowValue3', project_description:'desc3', project_completed: false},
    ])
}
