
exports.seed = async function(knex) {
  await knex('tasks').insert([
        {id: 1, description: 'rowValue1', notes:'notes1', completed: false, project_id: 1},
        {id: 2, description: 'rowValue2', notes:'notes2', completed: false, project_id: 2},
        {id: 3, description: 'rowValue3', notes:'notes3', completed: false, project_id: 3},
      ]);
};
