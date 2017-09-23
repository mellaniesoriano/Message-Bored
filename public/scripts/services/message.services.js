angular.module('boredApp')
.service('MessageService',
  ['$http',
  function($http) {
  return {
    getMessages: () => {
      return $http.get('/api/messages')
      .then(messages => {
         return messages.data;
      });
    },
    addMessage: newMsgData => {
      return $http.post('/api/messages', newMsgData);
    }
  };
}]);