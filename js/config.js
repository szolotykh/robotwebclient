angular.module('RobotClientApp')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html",
        controller : 'loginCtrl'
    })
    .when("/login", {
        templateUrl : "templates/login.html",
        controller : 'loginCtrl'
    })
    .when("/robotlist", {
        templateUrl : "templates/robotlist.html",
        controller : 'robotlistCtrl',
        resolve: {
          'robots': [
            'robotserverAPI', function(robotserverAPI){
              return robotserverAPI.GetRobotList(function(response){
                console.log("GetRobotList");
                return response.data;
              })
            }
          ]
        }
    })
    .when("/robotview", {
        templateUrl : "templates/robotview.html",
        controller : 'robotviewCtrl'
    })
    .otherwise("/");
}]);
