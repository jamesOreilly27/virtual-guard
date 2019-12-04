const db = require('../db')
const Sequelize = require('sequelize')

const PermanentGuest = db.define('permanent-guest', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  plateNumber : { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, allowNull: false },
  licenseNumber: { type: Sequelize.STRING, allowNull: false }
})

module.exports = PermanentGuest
