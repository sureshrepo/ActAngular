app.controller('AddedController', function ($scope, $cookies, Channel) {

	var activeChannelID = '';

	$scope.modalSubmenu = function(channelID) {
		$scope.setChannelID(channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.models = [];
		Channel.getAddedModels().success(function(data){
			$scope.models = data;
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
		Channel.remove(id).success(function(data){
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