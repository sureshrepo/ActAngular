app.controller('TestController', function ($http, $scope, $navigate, $cookies, Auth, Event, Channel, Config, Test) {

	init();

	function init() {
		//testConnection();
		helpers.log('here we go3');
		/*Test.testGET().success(function(data, status, headers, config){
			if (data['message']){
			   alert('GET:'+data['message']);
		   }else{
			   alert('GET:'+'Could not connect to API2x!');
		   }
		}).error(function(data, status, headers, config){
			alert('GET:'+'Error: view console log');
			helpers.log('data='+data);
			helpers.log('status='+status);
			helpers.log('headers='+headers);
			helpers.log('config='+config);
		});*/

		Test.testPOST().success(function(data, status, headers, config){
			if (data['message']){
			   alert('POST:'+data['message']);
		   }else{
			   alert('POST:'+'Could not connect to API2x!');
		   }
		}).error(function(data, status, headers, config){
			alert('POST:'+'Error: view console log');
			helpers.log('data='+data);
			helpers.log('status='+status);
			helpers.log('headers='+headers);
			helpers.log('config='+config);
		});
	}

	function testConnection(){
	    $.ajax({
	        url: 'https://api.social-inertia.com/v4/test',
	        type: 'get',
			method: 'get',
	        data: {'appKey': '09d62e05c01b851919a99f32d8242cad02bc0fce', 'apiKey':'', 'authToken':'d65d6537b1eb31a732208c127670573787f988af1b653c6755e458e7f6fbb299'},
	        dataType: 'json',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
	        error: function() {alert('Could not connect to API1!');},
	        success: function(json) {
	            if (json['message']){
	                alert(json['message']);
	            }else{
	                alert('Could not connect to API2!');
	            }
	        }
	    });
	}

/*	function testConfigConnection(){
		return models = $http({
			url:'https://api.social-inertia.com/v4/test',
			data:{'appKey':'09d62e05c01b851919a99f32d8242cad02bc0fce','apiKey':'', 'authToken':'d65d6537b1eb31a732208c127670573787f988af1b653c6755e458e7f6fbb299'},
			type:'get',
			dataType: 'json',
			header: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}*/


});