const knex = require('knex');
const confi = require('../../knexfile');

const configuration = process.env.NODE_ENV === 'test' ? confi.test : confi.development;

const connection = knex(configuration);

module.exports = connection;