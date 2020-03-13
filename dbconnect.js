const config = require('./knexfile');

exports.knex = require('knex')(config.development);
