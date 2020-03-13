const knexfile = require('./knexfile');

let config = knexfile.development;
if (process.env.APP_ENV == 'production') {
  config = knexfile.production;
}

exports.knex = require('knex')(config);
