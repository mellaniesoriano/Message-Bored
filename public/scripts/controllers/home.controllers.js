angular.module('boredApp')
.controller(
  'HomeController',
  ['$rootScope', '$scope', 'TopicService', 'LoginService',
  function($rootScope, $scope, TopicService, LoginService) {
    function getTopics(){
      TopicService.getTopics()
      .then(topics => {
        $scope.topics = topics;
      })
      .catch(err => {
        throw err;
      });
    }

    $scope.newTopic = { name: '' };
    $scope.addTopic = () => {
      let newTopic = {
        name: $scope.newTopic.name,
        created_by: localStorage.username
      };
      TopicService.addTopic(newTopic)
        .then(getTopics);
      $scope.newTopic.name = '';
    };

    $rootScope.logoutUser = () => {
      $rootScope.loggedIn = false;
      localStorage.setItem('loggedIn', false);
      localStorage.removeItem('username');
    };
    getTopics();
  }]);