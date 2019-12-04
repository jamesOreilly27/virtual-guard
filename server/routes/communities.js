const express = require('express')
const router = express.Router()
const Community = require('../db/models/community')

router.get('/', (req, res, next) => {
  Community.findAll()
  .then(communities => res.json(communities))
  .catch(err => console.log(err))
})

module.exports = router
