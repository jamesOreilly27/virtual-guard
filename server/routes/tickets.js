const express = require('express')
const router = express.Router()
const ServiceTicket = require('../db/models/serviceTicket')

router.get('/', (req, res, next) => {
  ServiceTicket.scope('ticket-queue').findAll()
  .then(tickets => res.json(tickets))
  .catch(err => console.log(err))
})

module.exports = router
