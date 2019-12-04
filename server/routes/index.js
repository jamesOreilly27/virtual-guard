const express = require('express')
const router = express.Router()

router.use('/communities', require('./communities'))
router.use('/agents', require('./agents'))
router.use('/residents', require('./residents'))

module.exports = router
