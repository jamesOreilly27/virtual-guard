const express = require('express')
const router = express.Router()

router.use('/communities', require('./communities'))

module.exports = router
