app.factory('Test', function ($http, Config) {
	var factory = {};

	factory.testGET = function() {
		var appKey = Config.appKey;
		var appUrl = Config.appUrl;
		var appUri = 'test/';
		var params = '?appKey='+appKey;
		params += '&authToken=d65d6537b1eb31a732208c127670573787f988af1b653c6755e458e7f6fbb299';
		var url = appUrl + appUri + params;
		return models = $http({
			url:url,
			method:'GET'
		});
	}

	factory.testPOST = function() {
		return models = $http({
			url:'https://api.social-inertia.com/v4/test/',
			method:'POST',
			data: 'appKey=09d62e05c01b851919a99f32d8242cad02bc0fce&authToken=d65d6537b1eb31a732208c127670573787f988af1b653c6755e458e7f6fbb299',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}

	return factory;
});