const db = require('knex')(
  {
    client: 'sqlite3',
    connection: {
      filename: "./database.sqlite"
    },
    migrations: {
      directory: './migrations'
    },
  }
);

module.exports = {
  db
};
