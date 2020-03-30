const knex = require('knex');
const confi = require('../../knexfile');

const connection = knex(confi.development);

module.exports = connection;