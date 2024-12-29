const router = require('express').Router();
const location = require('../controller/location')

router.get('/location', location.getlocation)

module.exports = router;