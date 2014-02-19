app.controller('AddedController', function ($scope, $navigate, $cookies, Channel, Response) {

	var activeChannelID = '';

	$scope.modalSubmenu = function(channelID) {
		$scope.setChannelID(channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.models = [];
		Channel.getAddedModels().success(function(data, status, headers, config){
			$scope.models = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config){
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}

	$scope.setChannelID = function(id) {
		activeChannelID = id;
	}

	$scope.moreInfo = function() {
		var id = activeChannelID;
		$scope.$navigate.go('/channel/'+id);
	}

	$scope.remove = function() {
		var id = activeChannelID;
		Channel.remove(id).success(function(data, status, headers, config){
			if (status == 200) {
				alert(data.message);
				init();
				$scope.modalSubmenu();
			} else {
				alert(data.message);
			}
		}).error(function(data, status, headers, config){
			alert(data.message);
		});
	}
});