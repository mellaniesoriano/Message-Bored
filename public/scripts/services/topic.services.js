angular.module('boredApp')
.service('TopicService',
  ['$http',
  function($http) {
  return {
    getTopics: () => {
      return $http.get('/api/topics')
      .then(topics => {
         return topics.data;
      });
    },
    getTopic: topicId => {
      return $http.get('/api/topics/' + topicId)
      .then(topic => {
         return topic.data;
      });
    },
    addTopic: newTopic => {
      return $http.post('/api/topics', newTopic);
    }
  };
}]);