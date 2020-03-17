
exports.up = function(knex) {
  return knex.schema.createTable('statement', function (table) {
    table.increments('id');
    table.integer('character_id').notNullable();
    table.decimal('amount', 18, 2).notNullable();
    table.string('description', 255).notNullable();
    table.timestamp('reference_date').notNullable();
    table.timestamp('created_at').notNullable();;
 });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('statement')
};
