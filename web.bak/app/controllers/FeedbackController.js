app.controller('FeedbackController', function ($scope, $cookies, User) {
	$scope.update = function() {
		var interest = $scope.model.interest;
		var feedback = $scope.model.feedback;

		/*User.putFeedbackModel(interest,feedback).success(function(data){
			if (data.status == 200) {
				alert('Your information was successfully updated.');
			} else {
				alert('There was an error processing your request. Please try again.');
			}
		}).error(function(){
			alert('There was an error processing your request. Please try again.');
		});*/
	}
});