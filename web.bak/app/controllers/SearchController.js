app.controller('SearchController', function ($scope, $navigate, $timeout, Channel) {
	$scope.channels = [];
	$scope.search = function() {
		$scope.channels = [/*
			{ name: 'Dave Jones', city: 'Phoenix' },
			{ name: 'Jamie Riley', city: 'Atlanta' },
			{ name: 'Heedy Wahlin', city: 'Chandler' },
			{ name: 'Thomas Winter', city: 'Seattle' }
		*/];
		/*var search = $scope.inputData.search;

		Channel.search(search).success(function(data){
			$scope.channel = data;
		});*/

	}
});