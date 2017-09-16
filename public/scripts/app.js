angular.module('boredApp', ['ngRoute']);

angular.module(boredApp)
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'msgController'
    })
    .when('/users', {
      templateUrl: '/User/user.html',
      controller: 'UserController'
    })
    .when('/users/:id', {
      templateUrl: '/User/singleUser.html',
      controller: 'singleUserCtrl'
    })
    .when('/createUser', {
      templateUrl: '/User/createUser.js',
      controller: 'createUserCtrl'
    })
    .otherwise({
    template: '<h1><center>OOPS! PAGE NOT FOUND! ;(</center></h1>'
  });

  $locationProvider.html5Mode(true);
}]);//end module