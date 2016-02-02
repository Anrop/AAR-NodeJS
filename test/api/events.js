var request = require('supertest');
var should = require('should');
var mongoose = require('mongoose');

var app = require('../setup').app;
var EventsFactory = require('../events_factory');

var Event = mongoose.model('Event');
var Mission = mongoose.model('Mission');

describe('events', function () {
  var mission;

  beforeEach(function (done) {
    mission = new Mission({
      name: 'Test',
      host: 'host.test',
    });
    mission.save(done);
  });

  afterEach(function (done) {
    mission = null;
    done();
  });

  describe('create', function () {
    describe('PlayerConnected', function () {
      it('should create PlayerConnected event', function (done) {
        request(app)
          .post('/api/missions/' + mission._id + '/events')
          .send({
            events: [
              EventsFactory.playerConnected(),
            ],
          })
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            should.exist(res.body.events);
            res.body.events.should.be.Array();
            res.body.events.length.should.eql(1);

            var event = res.body.events[0];
            event._mission.should.eql(mission._id.toString());
            event._type.should.eql('PlayerConnected');
            should.exist(event.player);
            event.player.should.be.Object();

            done();
          });
      });
    });

    describe('PlayerDisconnected', function () {
      it('should create PlayerDisconnected event', function (done) {
        request(app)
          .post('/api/missions/' + mission._id + '/events')
          .send({
            events: [
              EventsFactory.playerDisconnected(),
            ],
          })
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            should.exist(res.body.events);
            res.body.events.should.be.Array();
            res.body.events.length.should.eql(1);

            var event = res.body.events[0];
            event._mission.should.eql(mission._id.toString());
            event._type.should.eql('PlayerDisconnected');
            should.exist(event.player);
            event.player.should.be.Object();

            done();
          });
      });
    });

    describe('UnitCreated', function () {
      it('should create UnitCreated event', function (done) {
        request(app)
          .post('/api/missions/' + mission._id + '/events')
          .send({
            events: [
              EventsFactory.unitCreated(),
            ],
          })
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            should.exist(res.body.events);
            res.body.events.should.be.Array();
            res.body.events.length.should.eql(1);

            var event = res.body.events[0];
            event._mission.should.eql(mission._id.toString());
            event._type.should.eql('UnitCreated');
            should.exist(event.player);
            event.player.should.be.Object();
            should.exist(event.unit);
            event.unit.should.be.Object();

            done();
          });
      });
    });

    describe('UnitFired', function () {
      it('should create UnitFired event', function (done) {
        request(app)
          .post('/api/missions/' + mission._id + '/events')
          .send({
            events: [
              EventsFactory.unitFired(),
            ],
          })
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            should.exist(res.body.events);
            res.body.events.should.be.Array();
            res.body.events.length.should.eql(1);

            var event = res.body.events[0];
            event._mission.should.eql(mission._id.toString());
            event._type.should.eql('UnitFired');
            should.exist(event.ammo);
            event.ammo.should.be.Object();
            should.exist(event.player);
            event.player.should.be.Object();
            should.exist(event.unit);
            event.unit.should.be.Object();
            should.exist(event.weapon);
            event.weapon.should.be.Object();

            done();
          });
      });
    });

    describe('UnitPosition', function () {
      it('should create UnitPosition event', function (done) {
        request(app)
          .post('/api/missions/' + mission._id + '/events')
          .send({
            events: [
              EventsFactory.unitPosition(),
            ],
          })
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            should.exist(res.body.events);
            res.body.events.should.be.Array();
            res.body.events.length.should.eql(1);

            var event = res.body.events[0];
            event._mission.should.eql(mission._id.toString());
            event._type.should.eql('UnitPosition');
            should.exist(event.player);
            event.player.should.be.Object();
            should.exist(event.unit);
            event.unit.should.be.Object();

            done();
          });
      });
    });
  });
});
