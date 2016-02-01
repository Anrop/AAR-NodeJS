var http = require('http');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);

afterEach(function (done) {
  mockgoose.reset(done);
});

var app = require('../app');
var server = http.createServer(app);

module.exports.app = server;
