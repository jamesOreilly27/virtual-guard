const db = require('../db')
const Sequelize = require('sequelize')
const crypto = require('crypto')

const PropertyManager = db.define('property-manager', {
  userName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true }},
  password: { type: Sequelize.STRING, allowNull: false },
  salt: { type: Sequelize.STRING }
})

PropertyManager.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

PropertyManager.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

PropertyManager.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = PropertyManager.generateSalt()
    user.password = PropertyManager.encryptPassword(user.password, user.salt)
  }
}

PropertyManager.beforeCreate(setSaltAndPassword)
PropertyManager.beforeUpdate(setSaltAndPassword)

module.exports = PropertyManager
