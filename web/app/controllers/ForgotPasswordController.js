app.controller('ForgotPasswordController', function ($scope, $cookies, $navigate, $timeout, User) {

	$scope.forgotPassword = function() {
		var email = $scope.inputData.email;

		User.forgotPassword(email).success(function(data, status, headers, config){
			if (status == 200) {
				alert(data.message);
				$scope.$navigate.go('/signin-acton',true);
			} else {
				alert(data.message);
			}
		}).error(function(data, status, headers, config){
			alert(data.message);
		});
	}
});