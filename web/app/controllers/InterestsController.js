app.controller('InterestsController', function ($scope, $navigate, $cookies, Channel, Response) {

	$scope.modalSubmenu = function(channelID) {
		//alert('channelID='+channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.models = [];
		Channel.getInterestsModels().success(function(data, status, headers, config){
			$scope.models = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}
});