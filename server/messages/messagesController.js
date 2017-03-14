
var Q = require('q');
var Messages = require('./messagesModel.js')

// var findAllMessages = Q.nbind(Messages.find, Messages);
var sendMessageBinder = Q.nbind(Messages.create, Messages);
var getMessageCountBinder = Q.nbind(Messages.count, Messages);
var aggregateBinder = Q.nbind(Messages.aggregate, Messages);

module.exports = {



  postMessage: function(req, res, next) {
    var newMessage = {message: req.body.message};
    return sendMessageBinder(newMessage)
    .then(function(createdMessage) {
      res.json(createdMessage);
    })
    .fail(function(err) {
      next(err);
    })
  },

  getCount: function(req, res, next) {
    var it = {$sample: { size: 1 }};
    // var it = { $limit : 5 };
    aggregateBinder(it)
    .then(function(randomMessage) {
      res.json(randomMessage)
    })
    .fail(function(err) {
      next(err);
    })
  }

}