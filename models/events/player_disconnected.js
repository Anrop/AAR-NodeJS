var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PlayerSchema = require('../schemas/player');

var PlayerDisconnectedSchema = new Schema({
  _type: {type: String, default: 'PlayerDisconnected'},
  _mission : { ref: 'Mission', type: Schema.Types.ObjectId },
  timestamp: Date,
  player: PlayerSchema,
}, {
  timestamps: true,
});

module.exports = mongoose.model('PlayerDisconnected', PlayerDisconnectedSchema, 'events');
