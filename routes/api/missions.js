var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var events = require('./events');

var Mission = mongoose.model('Mission');

/* GET missions listing. */
router.get('/', function(req, res) {
  Mission.find(function (err, missions) {
    if(err) res.send(err);
    res.json({
      missions: missions
    });
  });
});

router.use('/:id', function (req, res, next) {
  Mission.findById(req.params.id, function(err, mission) {
    if(err) {
      res.send(err);
    } else {
      req.mission = mission;
      next();
    }
  });
});

router.get('/:id', function (req, res) {
  res.json({
    mission: req.mission
  });
});

router.use('/:id/events', events);

module.exports = router;
