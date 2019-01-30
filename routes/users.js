const express = require('express');
const { users } = require('../controllers');

const api = express.Router();

api.get('/topActiveUsers', users.getTopActivityUsers);

api.get('/users', users.getUserById);

module.exports = api;
