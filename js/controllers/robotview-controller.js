angular.module('RobotClientApp')
.controller('robotviewCtrl', ['$scope', 'robotInfo', 'peerService', 'robotAPI',
	function($scope, robotInfo, peerService, robotAPI) {

	console.log('robotviewCtrl');
  $scope.IsConnected = true;
  $scope.robotName = robotInfo.name;
  $scope.peerid = robotInfo.id;

	$scope.messageText = "";

	navigator.getUserMedia = navigator.getUserMedia ||
													 navigator.webkitGetUserMedia ||
													 navigator.mozGetUserMedia;

	var peer_server_key = 'l9lg5r98upqoajor';
	peerService.init(peer_server_key);
	$scope.connection = peerService.connect($scope.peerid);
	$scope.connection.on('open', function() {
  	$scope.connection.on('data', function(data) {
    	console.log('Received: ', data);
  	});
	});

	$scope.sendUserMessge = function(){
		console.log("Send");
		var msg = robotAPI.UserMessage($scope.messageText)
		$scope.connection.send(JSON.stringify(msg));
		$scope.messageText = "";
	}

	// onEnter event for message textarea
	$scope.onEnter = function(event){
		if(event.keyCode == 13){ // Enter
			if($scope.messageText){
				$scope.sendUserMessge();
			}
			event.preventDefault();
		}
	}

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
