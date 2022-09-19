const express = require('express')
const router = express.Router()

router.use('/app',require('./app/index'))

module.exports = router