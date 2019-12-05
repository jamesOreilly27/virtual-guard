const db = require('../db')
const Sequelize = require('sequelize')
const crypto = require('crypto')

const Resident = db.define('resident', {
  userName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true }},
  password: { type: Sequelize.STRING, allowNull: false },
  salt: { type: Sequelize.STRING },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  phoneNum: { type: Sequelize.STRING, allowNull: false }
})

Resident.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

Resident.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Resident.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = Resident.generateSalt()
    user.password = Resident.encryptPassword(user.password, user.salt)
  }
}

Resident.beforeCreate(setSaltAndPassword)
Resident.beforeUpdate(setSaltAndPassword)

module.exports = Resident
