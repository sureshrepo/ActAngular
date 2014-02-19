app.controller('ChannelController', function ($scope, $navigate, $routeParams, Channel, Response) {

	$scope.model = {};

	init();

	function init() {
		var channelID = ($routeParams.channelID) ? $routeParams.channelID : 0;

		Channel.getModel(channelID).success(function(data, status, headers, config){
			$scope.model = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}


});