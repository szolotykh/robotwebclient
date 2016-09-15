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
    .when("/robolist", {
        templateUrl : "templates/robolist.html",
        controller : 'robolistCtrl',
        resolve: {
          'robots': [
            'roboserverAPI', function(roboserverAPI){
              return roboserverAPI.GetRoboList(function(response){
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
