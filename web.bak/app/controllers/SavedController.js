app.controller('SavedController', function ($scope, $cookies, Event) {

	init();

	function init() {
		$scope.models = [];
		Event.getSavedModels().success(function(data){
			$scope.models = data;
		});

	}
});