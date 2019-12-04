const db = require('../db')
const Sequelize = require('sequelize')

const Agent = db.define('agent', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  ticketCount: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
  isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  isOnline: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

module.exports = Agent
