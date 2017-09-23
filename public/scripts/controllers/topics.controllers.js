angular.module('boredApp')
.controller(
  'TopicController',
  ['$scope','$routeParams','TopicService', 'MessageService',
  function($scope, $routeParams, TopicService, MessageService) {
    var topicId = $routeParams.id;
    function getTopic() {
      TopicService.getTopic(topicId)
      .then(topic => {
        $scope.topic = topic;
        $scope.messages = topic.messages;
      });
    }
    $scope.newMessage = { body: ''};
    $scope.addMessage = () => {
      var newMsgObj = {
        body: $scope.newMessage.body,
        topic_id: $scope.topic.id,
        created_by: localStorage.username
      };
      MessageService.addMessage(newMsgObj)
      .then(() => getTopic());
      $scope.newMessage.body = '';
    };
    getTopic();
  }]);