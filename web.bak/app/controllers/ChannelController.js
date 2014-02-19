app.controller('ChannelController', function ($scope, $routeParams, Channel) {

	$scope.model = {};

	init();

	function init() {
		var channelID = ($routeParams.channelID) ? $routeParams.channelID : 0;
		Channel.getAllModels().success(function(data){
			models = data;
			for (var i = 0; i < models.length; i++) {
				if (models[i].channelID == channelID) {
					$scope.model = models[i];
				}
			}
			return null;
		});
	}


});