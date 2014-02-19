app.controller('HistoryController', function ($scope, $cookies, Event) {

	init();

	function init() {
		$scope.models = [];
		Event.getHistoryModels().success(function(data){
			$scope.models = data;
		});

	}
});