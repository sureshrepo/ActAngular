app.controller('TrashController', function ($scope, $cookies, Event) {

	init();

	function init() {
		$scope.models = [];
		Event.getTrashModels().success(function(data){
			$scope.models = data;
		});

	}
});