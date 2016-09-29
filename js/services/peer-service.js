angular.module('RobotClientApp')
.service('peerService', function() {
	this.init = function(appKey){
		this.peer = new Peer({key: appKey, debug: 3});

		this.peer.on('open', function(id) {
			peer_id = id;
			console.log('My peer ID is: ' + id);
		});

		this.peer.on('error', function(err){
			console.log(err.message);
		});
	}
	this.connect = function(destPeerId){
		return this.peer.connect(destPeerId)
	}
});
