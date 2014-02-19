app.factory('Config', function ($cookies) {
	var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
	//var headers = {'Content-Type': 'application/json'};
	var appUrl = 'https://api.social-inertia.com/v4/';
	var appKey = '09d62e05c01b851919a99f32d8242cad02bc0fce';
	//var authToken = $cookies.authToken;
	//var userID = $cookies.userID;

	return {
		headers:headers,
		appUrl:appUrl,
		appKey:appKey
	};
});