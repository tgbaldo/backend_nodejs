const db = require('knex')(
  {
    client: 'sqlite3',
    connection: {
      filename: "./database.sqlite"
    }
  }
);

module.exports = {
  db
};
