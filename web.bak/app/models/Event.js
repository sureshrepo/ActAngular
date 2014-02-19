app.factory('Event', function ($http) { // removed $q from params
	var factory = {};
	var models = [];

	factory.save = function(id) { // id == idalphaFeedItem
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=feedFavorite/'+id+'/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'isFavorite=1';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		//var datastring = {'uri':'feeds/','reqUser':'1','reqAuth':'1','method':'GET'};

		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.shareEmails = function(id,emails) { // id == idalphaFeedItem
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=PUT';
		var uri = 'uri=shareFeedViaEmail/'+id+'/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'toEmail='+emails;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		//var datastring = {'uri':'feeds/','reqUser':'1','reqAuth':'1','method':'GET'};

		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.deleteFeed = function(id) { // id == idalphaFeedItem
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=DELETE';
		var uri = 'uri=feeds/'+id+'/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'isFavorite=1';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
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
		var uri = 'uri=feeds/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;
		//var datastring = {'uri':'feeds/','reqUser':'1','reqAuth':'1','method':'GET'};

		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getSavedModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=feeds/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'isFavorite=1';
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getChannelModels = function(id) { //channelID
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=feeds/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';
		var params = 'channelID='+id;
		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth+'&'+params;
		var url = '/request/';
		return models = $http({
			url:url,
			data:datastring,
			method:'POST',
			headers: headers
		});
	}

	factory.getHistoryModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=history/';
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

	factory.getTrashModels = function() {
		var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		var method = 'method=GET';
		var uri = 'uri=trash/';
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

	return factory;
});