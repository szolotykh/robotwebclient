angular.module('RobotClientApp')
.service('robotAPI',
  [function() {
  // Return generic message
  this.CreateMessage = function(msg_method, msg_type, msg_data){
    return {
      method: msg_method,
      type: msg_type,
      data: msg_data
    };
  }

  this.UserMessage = function(msg){
    return this.CreateMessage('POST', 'user_message', {message:msg});
  }

  this.MovementCommands = function(commands){
    return this.CreateMessage('POST', 'movement_commands', {commands:commands});
  }
}]);
