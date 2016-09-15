app.controller('robotCtrl', ['$scope', 'peerService',  function($scope, $peer) {
	console.log('appCtrl');
	var appKey  = 'l9lg5r98upqoajor';
	$scope.peer = $peer.Init(appKey);
	$scope.IsConnected = false;
}]);