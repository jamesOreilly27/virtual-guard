const express = require('express')
const router = express.Router()
const Agent = require('../db/models/agent')

router.get('/', (req, res, next) => {
  Agent.findAll()
  .then(agents => res.json(agents))
  .catch(err => console.log(err))
})

router.get('/:pk', (req, res, next) => {
  Agent.findByPk(req.params.pk)
  .then(agent => res.json(agent))
  .catch(err => console.log(err))
})

module.exports = router
