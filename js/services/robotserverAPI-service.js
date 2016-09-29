angular.module('RobotClientApp')
.service('robotserverAPI',
  ['roboserverURL', '$http', function(roboserverURL, $http) {
  this.GetRobotList = function(successCallback, errorCallback){
    return $http.get(roboserverURL+'/robotlist').then(successCallback, errorCallback);
  }
}]);
