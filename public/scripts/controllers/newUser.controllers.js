angular.module('boredApp')
.controller(
  'NewUserController',
  ['$scope','UserService',
  function($scope, UserService) {
    $scope.newUser = { name: '' };
    $scope.UserService = UserService;
    $scope.addUser = function() {
      let newUser = {
        name: $scope.newUser.name,
      };
      UserService.addUser(newUser);
      $scope.newUser.name = '';
    };
  }]);