const db = require('../db')
const Sequelize = require('sequelize')
const crypto = require('crypto')

const Agent = db.define('agent', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  userName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true } },
  password: { type: Sequelize.STRING, allowNull: false },
  salt: { type: Sequelize.STRING },
  ticketCount: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
  isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  isOnline: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

Agent.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

Agent.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Agent.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = Agent.generateSalt()
    user.password = Agent.encryptPassword(user.password, user.salt)
  }
}

Agent.beforeCreate(setSaltAndPassword)
Agent.beforeUpdate(setSaltAndPassword)

module.exports = Agent
