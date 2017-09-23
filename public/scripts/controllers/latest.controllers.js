angular.module('boredApp')
.controller(
  'LatestController',
  ['$scope', 'MessageService',
  function($scope, MessageService) {
    MessageService.getMessages()
    .then(messages => {
      $scope.messages = messages;
    })
    .catch(err => {
      throw err;
    });
  }]);