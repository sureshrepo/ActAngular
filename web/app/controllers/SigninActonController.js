app.controller('SigninActonController', function ($scope, $cookies, $navigate, $timeout, User, Auth, Config) {

	$scope.login = function() {
		var email = $scope.inputData.email;
		var password = $scope.inputData.password;

		User.userLogin(email, password).success(function(data, status, headers, config){
			if (status == 200) {
				$cookies.authToken = data.authToken;
				$cookies.userID = data.user.userID;
				$scope.$navigate.go('/','none')
			} else {
				alert('Could not find user.');
			}
		}).error(function(data){
			alert('Could not find user.');
		});
	}
});