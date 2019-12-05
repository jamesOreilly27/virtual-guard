const db = require('../db')
const Sequelize = require('sequelize')

const Visit = db.define('visit', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  startWindow: { type: Sequelize.DATE, allowNull: false },
  endWindow: { type: Sequelize.DATE, allowNull: false },
  codeWasUsed: { type: Sequelize.BOOLEAN, defaultValue: false },
  startTime: { type: Sequelize.DATE },
  endTime: {type: Sequelize.DATE }
}, {
  timestamps: false
})

module.exports = Visit
