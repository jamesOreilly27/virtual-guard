const express = require('express')
const router = express.Router()
const Community = require('../db/models/community')

router.get('/', (req, res, next) => {
  Community.scope('community-home').findAll()
  .then(communities => res.json(communities))
  .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  Community.findByPk(req.params.id)
  .then(community => res.json(community))
  .catch(err => console.log(err))
})

module.exports = router
