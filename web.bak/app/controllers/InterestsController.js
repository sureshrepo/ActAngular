app.controller('InterestsController', function ($scope, $cookies, Channel) {

	$scope.modalSubmenu = function(channelID) {
		//alert('channelID='+channelID);
		$(".modal-submenu").toggle('fast');
	}

	init();

	function init() {
		$scope.models = [];
		Channel.getInterestsModels().success(function(data){
			$scope.models = data;
		});
	}
});