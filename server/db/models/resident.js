const db = require('../db')
const Sequelize = require('sequelize')

const Resident = db.define('resident', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  phoneNum: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Resident
