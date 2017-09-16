angular.module('boredApp')
.service('UserService',
  ['$http', function($http) {
    return {
      addUser: function(daObj) {
        return $http.post('/api/users', userObj);
      },
      getUser: function(username) {
        return $http.post(`/api/users/${username}`);
      },
      getUserMsgs: function(userId) {
        return $http.get(`/api/messages/user/${userId}`);
      },
      getUserList: function() {
        return $http.get('/api/users');
      }
    };
  }])
.service('MsgService',
  ['$http', function($http) {
    return {
      getLatestMsgs: function() {
        return $http.get('/api/messages/latest');
      },
      addMsg: function(msgObj) {
        return $http.post('/api/messages', msgObj);
      }
    };
  }])
.service('TopicService',
  ['$http', function($http) {
    return {
      getTopics: function() {
        return $http.get('/api/topics');
      },
      addTopic: function(topicObj) {
        return $http.post('/api/topics', topicObj);
      },
      getTopicInfo: function(topic_id) {
        return $http.get(`/api/topics/${topic_id}`);
      },
      getMsgByTopic: function(topic_id) {
        return $http.get(`/api/messages/topic/${topic_id}`);
      }
    };
  }]);