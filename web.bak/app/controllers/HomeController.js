app.controller('HomeController', function ($scope, $navigate, $cookies, Auth, Event,Channel) {

	$scope.models = [];
	$scope.favModels = [];
	$scope.currEvent = {};

	init();

	function init() {
		if (!Auth.isValid()) {
			$scope.$navigate.go('/intro','none');
		}
		Event.getAllModels().success(function(data){
			if (data.status == 400) {
				Auth.deleteCookies();
				$scope.$navigate.go('/intro');
			}
			$scope.models = data;
		});
		Channel.getAddedModels().success(function(data){
			$scope.favModels = data;
		});
	}

	$scope.loadChannel = function(id) {
		Event.getChannelModels(id).success(function(data){
			if (data.status == 400) {
				Auth.deleteCookies();
				$scope.$navigate.go('/intro');
			}
			$scope.models = data;
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
		//alert('trash id='+id);
		var bTrash = confirm("Are you sure you want to remove this?");

		if (bTrash) {
			Event.deleteFeed(id).success(function(data){
				if (data.status == 200) {
					//alert(data.message);
					init();
				} else {
					alert(data.message);
				}
			}).error(function(data){
				alert(data.message);
			});
		}
	}

	$scope.save = function(id) {
		Event.save(id).success(function(data){
			if (data.status == 200) {
				//alert(data.message);
				//$scope.modalOptions();
			} else {
				alert(data.message);
			}
		}).error(function(data){
			alert(data.message);
		});
	}

	/*var events = {};
	//events = Event.getAllModels();
	helpers.log('Event.getAllModels():'+Event.getAllModels());*/

	/*$.each(events, function(i,ev) {
		helpers.log('data1='+ev.channelID);
	});*/
	/*helpers.log('test0');
	var models = Event.getAllModels();
	helpers.log('test1:'+models);*/
	/*$.each(models, function(i,model) {
		helpers.log('data1, isLocal='+model.isLocal);
	});*/
});