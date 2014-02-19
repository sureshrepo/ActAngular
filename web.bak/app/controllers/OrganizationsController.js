app.controller('OrganizationsController', function ($scope, $cookies, Channel) {

	var activeChannelID = '';

	$scope.modalSubmenu = function(channelID) {
		$scope.setChannelID(channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.recModels = [];
		$scope.allModels = [];
		Channel.getRecommendedModels().success(function(data){
			$scope.recModels = data;
		});
		Channel.getAllModels().success(function(data){
			$scope.allModels = data;
		});
	}

	$scope.setChannelID = function(id) {
		activeChannelID = id;
	}

	$scope.add = function() {
		var id = activeChannelID;
		Channel.add(id).success(function(data){
			if (data.status == 200) {
				alert(data.message);
				init();
				$scope.modalSubmenu();
			} else {
				alert(data.message);
			}
		}).error(function(data){
			alert(data.message);
		});
	}
});