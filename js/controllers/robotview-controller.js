angular.module('RobotClientApp')
.controller('robotviewCtrl', ['$scope', 'robotInfo', function($scope, robotInfo) {
	console.log('robotviewCtrl');
  $scope.IsConnected = true;
  $scope.robotName = robotInfo.name;

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	$scope.InitMedia = function(callback){
		navigator.getUserMedia(
			{
				audio: true,
				video: true
			},
			function(stream){
				// Set your video displays
				$('#user-video').prop('src', URL.createObjectURL(stream));
				callback(stream);
				},
			function(){});
	}
}]);
