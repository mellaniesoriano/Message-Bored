angular.module('boredApp')
.service('UserService',
  ['$http',
  function($http) {
  return {
    getUsers: () => {
      return $http.get('/api/users')
      .then(function(users) {
         return users.data;
      });
    },
    getUser: username => {
      return $http.get('/api/users/' + username)
      .then(user => {
         return user.data;
      });
    },
    addUser: newUser => {
      return $http.post('/api/users', newUser);
    }
  };
}]);