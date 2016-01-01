var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PlayerSchema = require('../schemas/player');

var PlayerConnectedSchema = new Schema({
  _type: {type: String, default: 'PlayerConnected'},
  _mission : { ref: 'Mission', type: Schema.Types.ObjectId },
  timestamp: Date,
  player: PlayerSchema,
}, {
  timestamps: true,
});

module.exports = mongoose.model('PlayerConnected', PlayerConnectedSchema, 'events');
