const db = require('../db')
const Sequelize = require('sequelize')

const Community = db.define('community', {
  name: { type: Sequelize.STRING, allowNull: false },
  gateOpen: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

module.exports = Community
