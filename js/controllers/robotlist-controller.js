angular.module('RobotClientApp')
.controller('robotlistCtrl',
	['$scope','$location', 'robotserverAPI', 'robotInfo', 'robots',
	function($scope, $location, robotserverAPI, robotInfo, robots) {

	$scope.robolist = robots;
	$scope.UpdateList = function(){
		robotserverAPI.GetRobotList(function(response){
			$scope.robolist = response.data;
		});
	}
	$scope.selectedRobotIndex = -1;
	$scope.OnSelectRobot = function(index){
		for(var i = 0; i < $scope.robolist.length; i++){
			$scope.robolist[i].selected = false;
		}
		$scope.robolist[index].selected = true;
		$scope.selectedRobotIndex = index;
	}

	$scope.OnConnect = function(){
		var selectedRobot = $scope.robolist[$scope.selectedRobotIndex];
		robotInfo.name = selectedRobot.name;
		robotInfo.id = selectedRobot.id;
		$location.url('/robotview');
	}

}]);
