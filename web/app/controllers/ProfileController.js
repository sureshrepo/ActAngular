app.controller('ProfileController', function ($scope, $cookies, User, Auth) {

	$scope.logout = function() {
		var bLogout = confirm("Are you sure you want to logout?");

		if (bLogout) {
			User.userLogout().success(function(data, status, headers, config){
				if (status == 200) {
					Auth.deleteCookies();
					$scope.$navigate.go('/intro');
				} else {
					alert('There was an error processing your request. Please try again.');
				}
			}).error(function(data){
				alert('There was an error processing your request. Please try again.');
			});
		}
	}
});