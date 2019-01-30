require('dotenv').config();

const {
  DB_CLIENT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD = '',
  DB_DATABASE = '',
  DB_PORT
} = process.env;

const knex = require('knex')({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
  }
});

module.exports = knex;
