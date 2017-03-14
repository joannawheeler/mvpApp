var messagesController = require('./messages/messagesController.js');

module.exports = function (app, express) {

  // app.get('/api',);
  app.post('/api/messages', messagesController.postMessage);
  app.get('/api/oneMessage', messagesController.getCount);

}