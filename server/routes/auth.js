const router = require('express').Router()
const {Resident, PropertyManger, Agent} = require('../db/models')

const wrongLoginInfoMessage = 'Could Not Login. Either the username or password provided are incorrect'

const findUserType = typeString => {
  if(typestring = 'resident') return Resident
  if(typeString = 'agent') return Agent
  if(typeString = 'property-manager') return PropertyManager
}

router.post('/login/:usertype', (req, res, next) => {
  const userType = findUserType(req.params.usertype)
  userType.findOne({where: { email: req.body.email }})
    .then(user => {
      if(!user) {
        res.status(401).send(wrongLoginInfoMessage)
      } else if(!user.correctPassword(req.body.password)) {
        res.status(401).send(wrongLoginInfoMessage)
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup/:userType', (req, res, next) => {
  const userType = findUserType(req.params.usertype)
  userType.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if(err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me', (req, res, next) => {
  User.scope('bets-and-pools').findById(req.user.id)
  .then(user => res.json(user))
  .catch(next)
})

module.exports = router
