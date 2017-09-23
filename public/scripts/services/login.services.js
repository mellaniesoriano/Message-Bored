angular.module('boredApp')
.service('LoginService',
  ['$http',
  function($http) {
  return {
    loginUser: username => {
      return $http.get('/api/users/login/' + username)
      .then(user => {
        if(user !== null){
          localStorage.setItem('username', user.data.username);
          localStorage.setItem('loggedIn', true);
        }
      });
    }
  };
}]);