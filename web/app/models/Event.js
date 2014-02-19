app.factory('Event', function ($http, Request) { // removed $q from params
	var factory = {};
	var models = [];

	factory.save = function(id) { // id == idalphaFeedItem
		var uri = 'user/feed/favorite/';
		var params = 'idalphaFeedItem='+id+'&isFavorite=1';
		return Request.post(uri, params, true, true, 'PUT');
	}

	factory.report = function(id) { // id == idalphaFeedItem
		var uri = 'quark/report/content';
		var params = 'idalphaFeedItem='+id+'&isFavorite=1';
		return Request.post(uri, params, true, true, 'POST');
	}

	factory.shareEmails = function(id,emails) { // id == idalphaFeedItem
		var uri = 'functions/share/';
		var params = 'idalphaFeedItem='+id+'&toEmails='+emails;
		return Request.post(uri, params, true, true, 'POST');
	}

	factory.deleteFeed = function(id) { // id == idalphaFeedItem
		var uri = 'user/feed';
		//var uri = 'testFeed';
		//var uri = 'test/';
		var params = 'idalphaFeedItem='+id;
		return Request.post(uri, params, true, true, 'DELETE');
	}

	factory.getAllModels = function() {
		var uri = 'user/feeds/';
		var params = 'type=filter&channelID=serendipity';
		return Request.get(uri, params, true, true);
	}

	factory.getSavedModels = function() {
		var uri = 'user/feed/favorites/';
		var params = 'isFavorite=1';
		return Request.get(uri, params, true, true);
	}

	factory.getChannelModels = function(id) { //channelID
		var uri = 'user/feeds/';
		var params = 'channelID='+id+'&type=filter';
		return Request.get(uri, params, true, true);
	}

	factory.getHistoryModels = function() {
		var uri = 'user/feed/history/';
		var params = '';
		return Request.get(uri, params, true, true);
	}

	factory.getTrashModels = function() {
		var uri = 'user/trash/';
		var params = '';
		return Request.get(uri, params, true, true);
	}

	return factory;
});