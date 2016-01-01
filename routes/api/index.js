var express = require('express');
var router = express.Router();

var missions = require('./missions');

router.use('/missions', missions);

module.exports = router;
