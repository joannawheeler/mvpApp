angular.module('mvp.services', [])

.factory('Factory', function ($http) {

  var leaveMsg = function(message) {
  // return message;

    return $http({
      method: 'POST',
      url: 'api/messages',
      data: {message: message, number: Math.random() } //sending a string; the message is a string
    })
    .then(function (resp) {
      return resp.data;
    })
  }

  var getMessage = function() {
    return $http({
      method: 'GET',
      url: 'api/oneMessage'
    })
    .then(function (resp) {
      // console.log('gets back')
      return resp.data
    })
  }

  return {
    leaveMsg : leaveMsg,
    getMessage : getMessage
  }

})