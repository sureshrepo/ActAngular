app.controller('RegActonController', function ($scope, $cookies, $navigate, $timeout, User) {

	$scope.register = function() {
		var firstName = $scope.inputData.firstName;
		var lastName = $scope.inputData.lastName;
		var email = $scope.inputData.email;
		var password = $scope.inputData.password;

		User.userRegistration(firstName, lastName, email, password)
				.success(function(data){
					if (data.status == 200) {
						$cookies.authToken = data.authToken;
						$cookies.userID = data.userID;
						$scope.$navigate.go('/','none');
					} else {
						alert('There was an error processing your request.  Please try again.');
					}
				})
				.error(function(data){
					alert('There was an error processing your request.  Please try again..');
				});
	}
});