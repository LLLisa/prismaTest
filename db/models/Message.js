const { DataTypes } = require('sequelize');
const conn = require('../conn');

const Message = conn.define('message', {
  text: {
    type: DataTypes.TEXT,
  },
});

module.exports = Message;
