app.controller('OrganizationsController', function ($scope, $navigate, $cookies, Channel, Response) {

	var activeChannelID = '';

	$scope.modalSubmenu = function(channelID) {
		$scope.setChannelID(channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.recModels = [];
		$scope.allModels = [];
		Channel.getRecommendedModels().success(function(data, status, headers, config){
			$scope.recModels = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
		Channel.getAllModels().success(function(data, status, headers, config){
			$scope.allModels = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}

	$scope.setChannelID = function(id) {
		activeChannelID = id;
	}

	$scope.add = function() {
		var id = activeChannelID;
		Channel.add(id).success(function(data, status, headers, config){
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