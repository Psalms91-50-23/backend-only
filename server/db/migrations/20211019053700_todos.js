
exports.up = function(knex) {

    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary()
        table.string('from')
        table.string('to')
        table.string('task')
        table.string('hint')
        table.boolean('completed').defaultTo(false)
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos')
};

