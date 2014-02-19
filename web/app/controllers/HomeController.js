app.controller('HomeController', function ($scope, $navigate, $cookies, Auth, Event, Channel, Response) {

	$scope.models = [];
	$scope.favModels = [];
	$scope.currEvent = {};

	init();

	function init() {
		if (!Auth.isValid()) {
			$scope.$navigate.go('/intro','none');
		}
		Event.getAllModels().success(function(data, status, headers, config){
			$scope.models = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
		Channel.getAddedModels().success(function(data, status, headers, config){
			$scope.favModels = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}

	$scope.loadChannel = function(id) {
		Event.getChannelModels(id).success(function(data, status, headers, config){
			$scope.models = Response.success($scope, $navigate, data, status, headers, config);
		}).error(function(data, status, headers, config) {
			Response.error($scope, $navigate, data, status, headers, config);
		});
	}

	$scope.gotoPage = function(id) {
		$navigate.go('/event/'+id);
	}

	$scope.showMenu = function(e) {
		if ($scope.currEvent.length > 0) {
			$scope.showEvent();
		}
		$scope.currEvent = $(e.currentTarget);
		$scope.currEvent.fadeOut();
		//e.currentTarget.style.visibility = "hidden"; // this works
		//e.currentTarget.classList.toggle('red'); // this works
		//helpers.log(e.currentTarget.className);
		//var box = e.currentTarget;
		//box.hide();
		//e.currentTarget.hide();
		//alert(d.value());
		//$(event.target).parent().parent().css('display','none');
	}
	$scope.showEvent = function() {
		$scope.currEvent.fadeIn();
	}


	$scope.trash = function(id) {
		var bTrash = confirm("Are you sure you want to remove this?");

		if (bTrash) {
			Event.deleteFeed(id).success(function(data, status, headers, config){
				if (status == 200) {
					init();
				} else {
					alert('1:'+data.message);
				}
			}).error(function(data, status, headers, config){
				alert('2:'+data.message);
			});
			/*$.ajax({
			    url: "https://api.social-inertia.com/v4/user/feed/",
			    type: "DELETE",
			    data: 'appKey=09d62e05c01b851919a99f32d8242cad02bc0fce&authToken=d3e3bf52926cbc9048a3f4ee941263e40fd4997c356244e09336a1dad0f9510e&userID=5bd3057190744a746053951c8daef520&idalphaFeedItem=89',
			    success: function(data, textStatus, jqXHR) {
			        helpers.log('success');
			    },
			    error: function (jqXHR, textStatus, errorThrown) {
					helpers.log('error');
			    }
			});*/
		}
	}

	$scope.save = function(id) {
		Event.save(id).success(function(data, status, headers, config){
			if (status == 200) {
				alert(data.message);
				//$scope.modalOptions();
			} else {
				alert(data.message);
			}
		}).error(function(data, status, headers, config){
			alert(data.message);
		});
	}
});