angular.module('boredApp')
.controller(
  'UsersController',
  ['$scope','UserService',
  function($scope, UserService) {
    UserService.getUsers()
    .then(users => {
      $scope.users = users;
    })
    .catch(err => {
      throw err;
    });
  }]);