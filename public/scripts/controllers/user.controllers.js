angular.module('boredApp')
.controller(
  'UserController',
  ['$scope','$routeParams','UserService',
  function($scope, $routeParams, UserService) {
    let userId = $routeParams.id;
    UserService.getUser(userId)
    .then(user => {
      $scope.user = user.username;
      $scope.messages = user.messages;
    })
    .catch(err => {
      throw err;
    });
  }]);