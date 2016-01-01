var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MissionSchema = new Schema({
  name: String,
  host: String,
  timestamp: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Mission', MissionSchema);
