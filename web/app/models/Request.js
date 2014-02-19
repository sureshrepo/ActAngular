app.factory('Request', function ($http, $cookies, Config) {
	var factory = {};

	factory.post = function(uri, params, bAuthToken, bUserID, type) {
		var headers = Config.headers;
		var appKey = Config.appKey;
		var appUrl = Config.appUrl;
		var appUri = uri;
		var params = 'appKey='+appKey+'&'+params;
		if (bAuthToken) {
			var authToken = $cookies.authToken;
			params += '&authToken='+authToken;
		}
		if (bUserID) {
			var userID = $cookies.userID;
			params += '&userID='+userID;
		}
		var url = appUrl+appUri;

		//set method
		switch(type.toUpperCase()) {
			case 'PUT':
				var method = 'PUT';
				break;
			case 'DELETE':
				var method = 'DELETE';
				break;
			case 'POST':
			default:
				var method = 'POST';
				break;
		}

		params += '&_method='+method;

		helpers.log('url='+url);
		helpers.log('params='+params);
		helpers.log('method='+method);
		helpers.log('headers='+headers);

		return models = $http({
			url:url,
			data:params,
			/* fixes CodeIgniter PUT/DELETE issue
			 * http://stackoverflow.com/questions/5540781/get-a-put-request-with-codeigniter */
			method:'POST',
			//method:method,
			headers:headers
		});
	}

	factory.get = function(uri, params, bAuthToken, bUserID) {
		var headers = Config.headers;
		var appKey = Config.appKey;
		var appUrl = Config.appUrl;
		var appUri = uri;
		var params = 'appKey='+appKey+'&'+params;
		if (bAuthToken) {
			var authToken = $cookies.authToken;
			params += '&authToken='+authToken;
		}
		if (bUserID) {
			var userID = $cookies.userID;
			params += '&userID='+userID;
		}
		var url = appUrl+appUri+'?'+params;
		return models = $http({
			url:url,
			method:'GET',
			headers:headers
		});
	}

	return factory;
});