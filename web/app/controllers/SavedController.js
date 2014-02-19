app.controller('SavedController', function ($scope, $navigate, $cookies, Event, Response) {

	init();

	function init() {
		$scope.models = [];
		Event.getSavedModels().success(function(data, status, headers, config){
			$scope.models = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});

	}
});