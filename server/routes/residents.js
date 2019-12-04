const router = require('express').Router()
const Resident = require('../db/models/resident')

router.get('/:pk', (req, res, next) => {
  Resident.scope('resident-homepage').findByPk(req.params.pk)
  .then(resident => res.json(resident))
  .catch(err => console.log(err))
})

module.exports = router
