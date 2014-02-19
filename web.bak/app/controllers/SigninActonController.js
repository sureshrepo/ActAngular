app.controller('SigninActonController', function ($scope, $cookies, $navigate, $timeout, User) {

	$scope.login = function() {
		var email = $scope.inputData.email;
		var password = $scope.inputData.password;

		User.userLogin(email, password).success(function(data){
			if (data.status == 200) {
				$cookies.authToken = data.authToken;
				$cookies.userID = data.userID;
				$scope.$navigate.go('/','none');

			} else {
				alert('Could not find user.');
			}
		}).error(function(data){
			alert('Could not find user.');
		});
	}
});