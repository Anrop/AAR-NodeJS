var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Event = mongoose.model('Event');

/* GET events listing. */
router.get('/', function(req, res) {
  Event.find(function (err, events) {
    if(err) res.send(err);
    res.json({
      events: events
    });
  });
});

router.use('/:id', function (req, res, next) {
  Event.findById(req.params.id, function(err, event) {
    if(err) {
      res.send(err);
    } else {
      req.event = event;
      next();
    }
  });
});

router.get('/:id', function (req, res) {
  res.json({
    event: req.mission
  });
});

module.exports = router;
