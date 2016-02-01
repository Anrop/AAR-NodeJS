var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MissionSchema = new Schema({
  name: { type: String, required: true },
  host: { type: String, required: true },
  timestamp: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Mission', MissionSchema);
