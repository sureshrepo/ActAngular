app.factory('Response', function (Auth) {
	var factory = {};

	factory.success = function($scope, $navigate, data, status, headers, config) {
		if (status == 200) {
			return data;
		} else {
			/*Auth.deleteCookies();
			$scope.$navigate.go('/intro');*/
			helpers.log('Response.success, status!=200');
		}
	}

	factory.error = function($scope, $navigate, data, status, headers, config) {
		/*Auth.deleteCookies();
		$scope.$navigate.go('/intro');*/
		helpers.log('Response.error');
	}

	return factory;
});