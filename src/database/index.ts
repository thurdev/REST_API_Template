/* Sequelize */
const Sequelize = require('sequelize');
/* Database Config */
const dbConfig = require('./config/database');
/* Models */
const MT = require('../models/ModelTemplate');
/* Connect to database */
const conn = new Sequelize(dbConfig);
/* Initiate Models */
MT.init(conn);
/* Model Associations */
MT.associate(conn.models);
/* Export connection */
module.exports = conn;