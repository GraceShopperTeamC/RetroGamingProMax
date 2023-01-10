'use strict'

const router = require('express').Router()

router.use('/product', require('./Product'))
router.use('/user', require('./User'))
router.use('/cart', require('./Cart'))


router.use((req, res, next) => {
  const err = new Error('Route not found!')
  err.status = 404
  next(err)
})

module.exports = router