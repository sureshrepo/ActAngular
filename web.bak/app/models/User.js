app.factory('User', function ($http) {
	var factory = {};
	var authToken = '';
	var isValid = false;
	var test = 'iamusertest';

	factory.getTest = function() {
		return test;
	}

	factory.setAuthToken = function(token) {
		authToken = token;
	}

	factory.setIsValid = function(b) {
		isValid = b;
	}

	factory.forgotPassword = function(email) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=POST';
		var uri = 'uri=auth/login/'; //forgot password
		var reqUser = 'reqUser=0';
		var reqAuth = 'reqAuth=0';
		var params = 'email='+email+'&password='+password;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.userLogin = function(email, password) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=POST';
		var uri = 'uri=auth/login/';
		var reqUser = 'reqUser=0';
		var reqAuth = 'reqAuth=0';
		var params = 'email='+email+'&password='+password;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.userLogout = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=POST';
		var uri = 'uri=auth/logout/';
		var reqUser = 'reqUser=0';
		var reqAuth = 'reqAuth=1';
		var params = '';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.userRegistration = function(firstName, lastName, email, password) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=POST';
		var uri = 'uri=users/';
		var reqUser = 'reqUser=0';
		var reqAuth = 'reqAuth=0';
		var params = 'firstName='+firstName+'lastName='+lastName+'email='+email+'&password='+password;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getUserInfoModel = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.putUserInfoModel = function(firstName,lastName,age,zip,gender,email) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'firstName='+firstName+'&lastName='+lastName+'&age='+age+'&zip='+zip+'&gender='+gender+'&email='+email;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getUserSettingModel = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=channels/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = '';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.putUserSettingModel = function(firstName,lastName,age,zip,gender,email) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'firstName='+firstName+'&lastName='+lastName+'&age='+age+'&zip='+zip+'&gender='+gender+'&email='+email;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.putFeedbackModel = function(interest,feedback) {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'interest='+interest+'&feedback='+feedback;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
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