require('dotenv').config();
const path = require('path');
const BASE_PATH = path.join(__dirname, '');

const {
  NODE_ENV = 'development',
  DB_CLIENT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD = '',
  DB_DATABASE = '',
  DB_PORT
} = process.env;

const connectionParams = {
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
  }
};

const testingParams = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:'
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
};

const params = NODE_ENV === 'test' ? testingParams : connectionParams;

const knex = require('knex')(params);

module.exports = knex;
