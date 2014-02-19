app.factory('Channel', function ($http, Request) { // removed $q from params
	var factory = {};
	var models = [];

	factory.search = function() {
		var uri = 'channel/';
		var params = 'search='+search;
		return Request.post(uri, params, true, true, 'POST');
	}

	factory.getAddedModels = function() {
		var uri = 'user/channels/';
		var params = 'type=filter';
		return Request.get(uri, params, true, true);
	}

	factory.getModel = function(id) {
		var uri = 'channel/';
		var params = 'channelID='+id;
		return Request.get(uri, params, true, true);
	}

	factory.getAllModels = function() {
		var uri = 'user/channels/all/';
		var params = 'sortBy=name&type=channel';
		return Request.get(uri, params, true, true);
	}

	factory.getRecommendedModels = function() {
		var uri = 'user/channels/rec/';
		var params = '';
		return Request.get(uri, params, true, true);
	}

	factory.getInterestsModels = function() {
		var uri = 'user/channels/all/';
		var params = 'sortBy=name&type=interest';
		return Request.get(uri, params, true, true);
	}

	factory.add = function(id) { // id == channelID
		var uri = 'user/channel/';
		var params = 'channelID='+id;
		return Request.post(uri, params, true, true, 'PUT');
	}

	factory.remove = function(id) { // id == channelID
		var uri = 'user/channel/';
		var params = 'channelID='+id;
		return Request.post(uri, params, true, true, 'DELETE');
	}

	return factory;
});