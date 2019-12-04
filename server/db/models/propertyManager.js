const db = require('../db')
const Sequelize = require('sequelize')

const PropertyManager = db.define({
  userName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true }},
  password: { type: Sequelize.STRING, allowNull: false },
  salt: { type: Sequelize.STRING }
})

module.exports = PropertyManager
