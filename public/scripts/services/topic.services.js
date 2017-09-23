angular.module('boredApp')
.service('TopicService',
  ['$http',
  function($http) {
  return {
    getTopics: function() {
      return $http.get('/api/topics')
      .then(function(topics) {
         return topics.data;
      });
    },
    getTopic: function(data) {
      return $http.get('/api/topics/' + data)
      .then(function(topic) {
         return topic.data;
      });
    },
    addTopic: function(data) {
      return $http.post('/api/topics', data);
    }
  };
}]);