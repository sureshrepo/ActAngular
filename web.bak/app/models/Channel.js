app.factory('Channel', function ($http) { // removed $q from params
	var factory = {};
	var models = [];

	factory.search = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=feeds/';
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

	factory.getAddedModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=channels/';
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

	factory.getAllModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=allChannels/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'sortBy=name&type=channel';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getRecommendedModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=channelRec/';
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

	factory.getInterestsModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=allChannels/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'sortBy=name&type=filter';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.add = function(id) { // id == channelID
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=channel/'+id+'/';
		var reqUser = 'reqUser=1';
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

	factory.remove = function(id) { // id == channelID
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=DELETE';
		var uri = 'uri=channel/'+id+'/';
		var reqUser = 'reqUser=1';
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

	return factory;
});