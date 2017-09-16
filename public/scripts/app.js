angular.module('boredApp', ['ngRoute']);

angular.module(boredApp)
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'userController'
    })






}]);//end module