const config = require('./knexfile');

module.exports.knex = require('knex')(config.development);
