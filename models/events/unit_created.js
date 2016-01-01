var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UnitSchema = require('../schemas/unit');

var UnitCreatedSchema = new Schema({
  _type: {type: String, default: 'UnitCreated'},
  _mission : { ref: 'Mission', type: Schema.Types.ObjectId },
  timestamp: Date,
  unit: UnitSchema,
}, {
  timestamps: true,
});

module.exports = mongoose.model('UnitCreated', UnitCreatedSchema, 'events');
