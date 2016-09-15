app.service('peerService', function() {
	this.Init = function(appKey){
		var peer_server_key = 'l9lg5r98upqoajor';
		var peer = new Peer({key: appKey, debug: 3});

		peer.on('open', function(id) {
			peer_id = id;
			console.log('My peer ID is: ' + id);
		});

		peer.on('error', function(err){
			console.log(err.message);
		});

		peer.on('connection', function(c) {
			console.log("----- Connection");
			// Receive messages
			c.on('data', function(data) {
				console.log('Received: ' +  data);
			});
			c.on('open', function(){
				console.log('Connection opened');

				$('#iSend').click(function(){
					var msg = $('#iMsg').val();
					console.log('Send:' + msg);
					c.send(msg);
				});
			});
		});

		peer.on('call', function(call){
			// Wait for stream on the call, then set peer video display
			call.on('stream', function(stream){
				$('#user-video').prop('src', URL.createObjectURL(stream));
			});
			InitMedia(function(stream){
				call.answer(stream);
			});
		});
		return peer;
	}
});
