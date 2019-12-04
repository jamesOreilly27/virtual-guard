const db = require('../db')
const Sequelize = require('sequelize')

const ServiceTicket = db.define('ticket', {
  isClosed: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

module.exports = ServiceTicket
