angular.module('RobotClientApp')
.directive('robotcontroller', [function () {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      templateUrl: 'templates/robotcontroller.html',
      scope: {
        connection: "="
      },
      controller: ['$scope', '$interval', 'robotAPI', 'ActionPublishIntVar',
        function($scope, $interval, robotAPI, ActionPublishIntVar){

        // Publish
        var publishHandler;

        var Actions = {
          'forward': false,
          'backward': false,
          'left': false,
          'right': false,
          'rotate_left': false,
          'rotate_right': false,
          'stop': false
        }

        var KeyMap = {
          87: 'forward',
          83: 'backward',
          65: 'left',
          68: 'right',
          81: 'rotate_left',
          69: 'rotate_right',
          32: 'stop'
        }

        var disableActions = function(){
          for(action in Actions){
            Actions[action] = false;
          }
        }
        var getActionArr = function(){
          var actionArr = [];
          for(action in Actions){
            if(Actions[action]){
              actionArr.push(action);
            }
          }
          return actionArr;
        }

        $scope.onKeyDown = function(event){
          var action = KeyMap[event.keyCode];
          if(action){
            console.log(action);
            Actions[action] = true;
            event.preventDefault();
          }
        };

        $scope.onKeyUp = function(event){
          var action = KeyMap[event.keyCode];
          if(action){
            console.log(action);
            Actions[action] = false;
          }
        };

        $scope.onFocus = function(event){
          console.log('onFocus');
          disableActions();
          publishHandler = $interval(function(){
            var msg = robotAPI.MovementCommands(getActionArr());
            $scope.connection.send(JSON.stringify(msg));
          }, ActionPublishIntVar);
        }

        $scope.onBlur = function(event){
          console.log("stop");
          $interval.cancel(publishHandler);
          disableActions();
          var msg = robotAPI.MovementCommands(['stop']);
          $scope.connection.send(JSON.stringify(msg));
        };
      }]
    };
}]);
