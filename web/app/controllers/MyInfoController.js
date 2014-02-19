app.controller('MyInfoController', function ($scope, $cookies, User) {

	init();

	function init() {
		$scope.model = [];
		User.getUserInfoModel().success(function(data){
			$scope.model = data;
		});
	}

	$scope.update = function() {
		var firstName = $scope.model.firstName;
		var lastName = $scope.model.lastName;
		var age = $scope.model.age;
		var zip = $scope.model.zip;
		var gender = $scope.model.gender;
		var email = $scope.model.email;

		User.putUserInfoModel(firstName,lastName,age,zip,gender,email).success(function(data){
			if (data.status == 200) {
				alert('Your information was successfully updated.');
			} else {
				alert('There was an error processing your request. Please try again.');
			}
		}).error(function(){
			alert('There was an error processing your request. Please try again.');
		});
	}
});