
exports.up = function(knex) {
  return knex.schema
    .createTable('heroes', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('email', 255).notNullable();
       table.string('password', 255).notNullable();
       table.decimal('balance', 18, 2);
       table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('heroes')
};
