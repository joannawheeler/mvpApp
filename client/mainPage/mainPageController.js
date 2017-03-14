angular.module('mvp.mainPage', [])

.controller('MainPageController', function($scope, Factory) {

  $scope.messageLeft = "";
  $scope.leaveMessage = function() {
    // console.log($scope.messageLeft)
    Factory.leaveMsg($scope.messageLeft)
    .then(function (resp) {
      $scope.messageLeft = "";
    })
  }
  $scope.displayedMessage = "";

  $scope.getOneMessage = function() {
    Factory.getMessage()
    .then(function (resp) {
      showMessage(resp[0].message)
    })
  }


  var showMessage = function(message) {
    $scope.displayedMessage = message;
  }

})