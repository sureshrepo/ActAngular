app.factory('User', function (Request) {
	var factory = {};

	factory.forgotPassword = function(email) {
		var uri = 'user/resetPassword/';
		var params = 'username='+email;
		return Request.post(uri, params, false, false, 'POST');
	}

	// ORIGINAL for v4
	/*factory.userLogin = function(email, password) {
		var headers = Config.header;
		var appKey = Config.appKey;
		var appUrl = Config.appUrl;
		var appUri = 'auth/login/';
		var params = 'appKey='+appKey;
		//params += '&authToken='+authKey;
		params += '&username='+email+'&password='+password;
		var url = appUrl + appUri;
		return models = $http({
			url:url,
			data:params,
			method:'POST',
			headers: headers
		});
	}*/

	factory.userLogin = function(email, password) {
		var uri = 'auth/login/';
		var params = 'username='+email+'&password='+password;
		return Request.post(uri, params, false, false, 'POST');
	}

	factory.userLogout = function() {
		var uri = 'auth/logout/';
		var params = '';
		return Request.post(uri, params, true, true, 'POST');
	}

	factory.userRegistration = function(firstName, lastName, email, password) {
		var uri = 'user/';
		var params = 'firstName='+firstName+'lastName='+lastName+'email='+email+'&password='+password;
		return Request.post(uri, params, false, false, 'POST');
	}

	factory.getUserInfoModel = function() {
		var uri = 'user/';
		var params = '';
		return Request.get(uri, params, true, true);
	}

	factory.putUserInfoModel = function(firstName,lastName,age,zip,gender,email) {
		var uri = 'user/';
		var params = 'firstName='+firstName+'&lastName='+lastName+'&age='+age+'&zip='+zip+'&gender='+gender+'&email='+email;
		return Request.post(uri, params, true, true, 'PUT');
	}

	factory.getUserSettingModel = function() {
		var uri = 'user/settings/interests';
		var params = '';
		return Request.get(uri, params, true, true);
	}

	factory.putUserSettingModel = function(firstName,lastName,age,zip,gender,email) {
		var uri = '/';
		var params = 'firstName='+firstName+'&lastName='+lastName+'&age='+age+'&zip='+zip+'&gender='+gender+'&email='+email;
		return Request.post(uri, params, true, true, 'PUT');
	}

	factory.putFeedbackModel = function(interest,feedback) {
		var uri = 'functions/feedback/';
		var params = 'interest='+interest+'&feedback='+feedback;
		return Request.post(uri, params, true, true, 'PUT');
	}

	factory.getAuthToken = function() {
		return authToken;
	}

	factory.getIsValid = function() {
		return isValid;
	}

	factory.getAppKey = function() {
		return appKey;
	}

	return factory;
});