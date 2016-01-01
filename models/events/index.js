var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema({
  _type: String,
  _mission : { ref: 'Mission', type: Schema.Types.ObjectId },
}, {
  timestamps: true,
});

module.exports.event = mongoose.model('Event', EventSchema, 'events');

require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    module.exports[name] = require('./' + file);
  }
});
