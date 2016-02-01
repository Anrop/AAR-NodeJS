var express = require('express');
var router = express.Router();
var async = require('async');
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

router.post('/', function(req, res) {
  var events = req.body.events;
  if (events && Array.isArray(events)) {
    async.map(events, function (event, callback) {
      var EventModel = mongoose.model(event.type);
      event = new EventModel(event);
      event._mission = req.mission._id;
      event.save(callback);
    }, function (err, events) {
      if (events.length > 0) {
        res.json({
          events: events,
        });
      } else {
        res.status(400).json({
          error: 'No valid events',
        });
      }
    });
  } else {
    res.status(400).json({
      error: 'Events array not set',
    });
  }
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
    event: req.event,
  });
});

module.exports = router;
