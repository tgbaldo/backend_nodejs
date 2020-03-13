const db = require('../../dbconnect');

module.exports = {
  async getAll() {
    return await db.knex('heroes');
  },

  async getById(id) {
    return await db.knex('heroes')
      .where('id', id)
      .first();
  },

  async store(data) {
    return await db.knex('heroes')
      .returning('id')
      .insert(data);
  },

  async update(id, data) {
    return await db.knex('heroes')
      .where('id', id)
      .update(data);
  },

  async delete(id) {
    return await db.knex('heroes')
      .where('id', id)
      .delete();
  }
};
