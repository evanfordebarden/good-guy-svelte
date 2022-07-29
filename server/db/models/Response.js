const Sequelize = require("sequelize");
const { TEXT, BOOLEAN } = Sequelize;
const db = require("../db");

const Response = db.define("response", {
  message: {
    type: TEXT,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isPositive: {
    type: BOOLEAN,
    defaultValue: false,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Response;
