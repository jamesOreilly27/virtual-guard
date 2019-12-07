const router = require('express').Router()
const {Resident, PropertyManager, Agent} = require('../db/models')

const wrongLoginInfoMessage = 'Could Not Login. Either the username or password provided are incorrect'

const findUserType = typeString => {
  if(typeString === 'resident') return Resident
  if(typeString === 'agent') return Agent
  if(typeString === 'property-manager') return PropertyManager
}

router.post('/login/:usertype', (req, res, next) => {
  const userType = findUserType(req.params.usertype)
  userType.findOne({where: { email: req.body.email }})
    .then(user => {
      if(!user) {
        console.log('FIRING WRONG USER')
        res.status(401).send(wrongLoginInfoMessage)
      } else if(!user.correctPassword(req.body.password)) {
        console.log('FIRING WRONG PASSWORD')
        res.status(401).send(wrongLoginInfoMessage)
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me/:usertype', (req, res, next) => {
  const userType = findUserType(req.params.usertype)
  userType.findByPk(req.user.id)
  .then(user => res.json(user))
  .catch(next)
})

module.exports = router
