angular.module('boredApp', ['ngRoute']);

angular.module('boredApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeController'
  })
  .when('/register', {
    templateUrl: '/views/newUser.html',
    controller: 'NewUserController'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController'
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: '/views/user.html',
    controller: 'UserController'
  })
  .when('/topics/:id', {
    templateUrl: '/views/topics.html',
    controller: 'TopicController'
  })
  .when('/latest', {
    templateUrl: '/views/latest.html',
    controller: 'LatestController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
}]);