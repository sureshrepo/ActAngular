app.factory('Event', function ($http) { // removed $q from params
	return {
		getAllModels:function() {
			//var deferred = $q.defer();
			var method = 'method=GET';
			var uri = 'uri=feeds/';
			var reqUser = 'reqUser=1';
			var reqAuth = 'reqAuth=1';
			var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;

			//var datastring = {'uri':'feeds/','reqUser':'1','reqAuth':'1','method':'GET'};

			var url = '/request/';
			return $http({
				url:url,
				data:datastring,
				method:'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			});
			/*.success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.reject("An error occured");
			});
			return deferred.promise;*/
		}
	}


	/*var factory = {};
	//var models = false;
	var test = '';

	factory.getTest = function() {
		return User.getTest();
	}

	factory.getAllModels = function() {
		helpers.log('getAllModels');
		return models();
	}

	factory.setAllModels = function(data) {
		models = data;
	}

	var models = function() {
		var method = 'method=GET';

		var uri = 'uri=feeds/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';

		//https://api.social-inertia.com/v3/users/5bd3057190744a746053951c8daef520/feeds/?appKey=55f93f2b2997ac8dfb0ae7e230481a33&authToken=54b414b1c1f147a3164307af995f5885f9d725c764c49b5c8be3e92fea5e1de2

		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;
		$.ajax({
			type: "POST",
			data: datastring,
			url: "/request/",
			success: function (data, status) {
				var data = $.parseJSON(data);
				helpers.log('AJAX success-data:'+data);
				helpers.log('AJAX success-status:'+status);
				//factory.setAllModels(data);
				return data;

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				helpers.log('AJAX error-XMLHttpRequest:'+XMLHttpRequest);
				helpers.log('AJAX error-textStatus:'+textStatus);
				helpers.log('AJAX error-errorThrown:'+errorThrown);
				//console.log('dump:'+dump(XMLHttpRequest));
			}
		});
	}*/

	/*factory.requestGetAllModels = function() {
		var method = 'method=GET';

		var uri = 'uri=feeds/';
		var reqUser = 'reqUser=1';
		var reqAuth = 'reqAuth=1';

		//https://api.social-inertia.com/v3/users/5bd3057190744a746053951c8daef520/feeds/?appKey=55f93f2b2997ac8dfb0ae7e230481a33&authToken=54b414b1c1f147a3164307af995f5885f9d725c764c49b5c8be3e92fea5e1de2

		var datastring = method+'&'+uri+'&'+reqUser+'&'+reqAuth;
		$.ajax({
			type: "POST",
			data: datastring,
			url: "/request/",
			success: function (data, status) {
				var data = $.parseJSON(data);
				helpers.log('AJAX success-data:'+data);
				helpers.log('AJAX success-status:'+status);
				//factory.setAllModels(data);
				return data;

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				helpers.log('AJAX error-XMLHttpRequest:'+XMLHttpRequest);
				helpers.log('AJAX error-textStatus:'+textStatus);
				helpers.log('AJAX error-errorThrown:'+errorThrown);
				//console.log('dump:'+dump(XMLHttpRequest));
			}
		});
	}*/

	/*factory.getModel = function(id) {
		//empty
	}*/

	/*return factory;*/
});