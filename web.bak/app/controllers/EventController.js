app.controller('EventController', function ($scope, $routeParams, Event) {

	$scope.event = {};

	init();

	function init() {
		var eventID = ($routeParams.eventID) ? parseInt($routeParams.eventID) : 0;
		Event.getAllModels().success(function(data){
			models = data;
			$scope.events1 = models;
			for (var i = 0; i < models.length; i++) {
				if (models[i].idalphaFeedItem == eventID) {
					$scope.event = models[i];
				}
			}
			return null;
		});
	}

	$scope.modalOptions = function() {
		//submenu hide
		$(".modal-options").toggle('fast');
	}

	$scope.modalSubmenu = function() {
		$(".modal-submenu").toggle('fast');
	}

	$scope.modalEmail = function() {
		$(".modal-email").toggle('fast');
	}

	$scope.report = function() {
		//empty
	}

	$scope.save = function(id) {
		Event.save(id).success(function(data){
			if (data.status == 200) {
				alert(data.message);
				$scope.modalOptions();
			} else {
				alert(data.message);
			}
		}).error(function(data){
			alert(data.message);
		});
	}

	$scope.action = function() {
		//empty
	}

	$scope.facebook = function() {
		//empty
	}

	$scope.shareEmail = function(id) {
		var emails = $scope.inputData.emails;
		Event.shareEmails(id,emails).success(function(data){
			if (data.status == 200) {
				alert(data.message);
				$scope.modalEmail();
			} else {
				alert(data.message);
				$scope.modalEmail();
			}
		}).error(function(data){
			alert(data.message);
		});
	}

	$scope.deleteFeed = function(id) {
		Event.deleteFeed(id).success(function(data){
			if (data.status == 200) {
				alert(data.message);
			} else {
				alert(data.message);
			}
		}).error(function(data){
			alert(data.message);
		});
	}

});