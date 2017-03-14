var mongoose = require('mongoose');

var MessagesSchema = new mongoose.Schema({
  message: {
    type: String
  }
})

var Messages = module.exports = mongoose.model('messages', MessagesSchema);