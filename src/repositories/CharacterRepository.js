const db = require('../../dbconnect');

module.exports = {
  async getAll() {
    return await db.knex('characters');
  },

  async getById(id) {
    return await db.knex('characters')
      .where('id', id)
      .first();
  },

  async store(data) {
    return await db.knex('characters')
      .returning(['id'])
      .insert(data);
  },

  async update(id, data) {
    return await db.knex('characters')
      .where('id', id)
      .update(data);
  },

  async delete(id) {
    return await db.knex('characters')
      .where('id', id)
      .delete();
  }
};
