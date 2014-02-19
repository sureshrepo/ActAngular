app.controller('ForgotPasswordController', function ($scope, $cookies, $navigate, $timeout, User) {

	$scope.forgotPassword = function() {
		var email = $scope.inputData.email;

		User.forgotPassword(email).success(function(data){
			if (data.status == 200) {
				$scope.$navigate.go('/signin-acton',true);
			} else {
				alert('Could not find email.');
			}
		}).error(function(data){
			alert('Could not find email.');
		});
	}
});