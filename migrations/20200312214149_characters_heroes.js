
exports.up = function(knex) {
  return knex.schema
    .createTable('characters', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('type', 15).notNullable();
       table.string('avatar', 255);
       table.decimal('balance', 18, 2);
       table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('characters')
};
