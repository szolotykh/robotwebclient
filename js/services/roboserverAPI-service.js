angular.module('RobotClientApp')
.service('roboserverAPI',['roboserverURL', '$http', function(roboserverURL, $http) {
  this.GetRoboList = function(successCallback, errorCallback){
    return $http.get(roboserverURL+'/robolist').then(successCallback, errorCallback);
  }
}]);
