var request = require('supertest');
var should = require('should');
var mongoose = require('mongoose');

var app = require('../setup').app;
var Mission = mongoose.model('Mission');

describe('missions', function () {
  beforeEach(function (done) {
    Mission.remove(done);
  });

  describe('empty', function () {
    it('should return empty missions', function (done) {
      request(app)
        .get('/api/missions')
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body.missions.should.be.empty();
          done();
        });
    });
  });

  describe('prefilled', function () {
    beforeEach(function (done) {
      Mission.create({
        name: 'Test Mission',
        host: '127.0.0.1',
      }, done);
    });

    it('should return missions', function (done) {
      request(app)
        .get('/api/missions')
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body.missions.length.should.eql(1);

          var mission = res.body.missions[0];
          mission.name.should.eql('Test Mission');
          mission.host.should.eql('127.0.0.1');

          done();
        });
    });
  });

  describe('create', function () {
    var missionName = 'Test Mission';

    it('should create mission', function (done) {
      request(app)
        .post('/api/missions')
        .send({ name: missionName })
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          should.exist(res.body.mission);

          var mission = res.body.mission;

          should.exist(mission.name);
          mission.name.should.eql(missionName);
          should.exist(mission.host);
          mission.host.should.not.be.empty();

          Mission.findOne(mission._id, function (err, mission) {
            should.not.exist(err);
            should.exist(mission);

            should.exist(mission.name);
            mission.name.should.eql(missionName);
            should.exist(mission.host);
            mission.host.should.not.be.empty();

            done();
          });
        });
    });

    it('should not create mission without name', function (done) {
      request(app)
        .post('/api/missions')
        .send({})
        .expect(400)
        .end(function (err, res) {
          should.not.exist(res.body.mission);
          should.exist(res.body.error);

          done();
        });
    });
  });
});
