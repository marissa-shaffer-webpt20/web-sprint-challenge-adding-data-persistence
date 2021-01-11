
exports.seed = async function(knex) {
  await knex('table_name').insert([
        {task_id: 1, task_description: 'rowValue1', task_notes:'notes1', task_completed: false},
        {task_id: 2, task_description: 'rowValue2', task_notes:'notes2', task_completed: false},
        {task_id: 3, task_cescription: 'rowValue3', task_notes:'notes3', task_completed: false},
      ]);
};
