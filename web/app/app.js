var app = angular.module('actonApp', ['ajoslin.mobile-navigate','ngCookies','hammer']);

app.config(function ($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			controller: "HomeController",
			templateUrl: "app/views/home.html"
			//reverse: true
			//transition: "modal"
		}).when("/channel/:channelID", {
			controller: "ChannelController",
			templateUrl: "app/views/channel.html"
		}).when("/event/:eventID", {
			controller: "EventController",
			templateUrl: "app/views/event.html"

		/**** SIGNIN/REG section ****/
		}).when("/intro", {
			controller: "IntroController",
			templateUrl: "app/views/intro.html"
		}).when("/signin", {
			templateUrl: "app/views/signin.html"
		}).when("/signin-acton", {
			controller:"SigninActonController",
			templateUrl: "app/views/signin-acton.html"
		}).when("/forgot-password", {
			controller:"ForgotPasswordController",
			templateUrl: "app/views/forgot-password.html"
		/*}).when("/signin-facebook", {
			templateUrl: "app/views/signin-facebook.html"*/
		}).when("/reg", {
			templateUrl: "app/views/reg.html"
		}).when("/reg-acton", {
			controller:"RegActonController",
			templateUrl: "app/views/reg-acton.html"
		/*}).when("/reg-facebook", {
			templateUrl: "app/views/reg-facebook.html"*/

		/**** PROFILE section ****/
		}).when("/profile", {
			controller: "ProfileController",
			templateUrl: "app/views/profile.html"
		}).when("/my-information", {
			controller: "MyInfoController",
			templateUrl: "app/views/my-information.html"
		}).when("/settings", {
			controller: "SettingsController",
			templateUrl: "app/views/settings.html"
		}).when("/my-benefits", {
			templateUrl: "app/views/my-benefits.html"
		}).when("/saved", {
			controller: "SavedController",
			templateUrl: "app/views/saved.html"
		}).when("/history", {
			controller: "HistoryController",
			templateUrl: "app/views/history.html"
		}).when("/trash", {
			controller: "TrashController",
			templateUrl: "app/views/trash.html"
		}).when("/tutorial", {
			controller: "TutorialController",
			templateUrl: "app/views/tutorial.html"
		}).when("/give-feedback", {
			controller: "FeedbackController",
			templateUrl: "app/views/give-feedback.html"

		/**** FILTER section ****/
		}).when("/filter", {
			templateUrl: "app/views/filter.html"
		}).when("/search", {
			controller: "SearchController",
			templateUrl: "app/views/search.html"
		}).when("/added", {
			controller: "AddedController",
			templateUrl: "app/views/added.html"
		}).when("/organizations", {
			controller: "OrganizationsController",
			templateUrl: "app/views/organizations.html"
		}).when("/interests", {
			controller: "InterestsController",
			templateUrl: "app/views/interests.html"

		/**** TEST ****/
		}).when("/test", {
			controller: "TestController",
			templateUrl: "app/views/test.html"

		/**** DEFAULT ****/
		}).otherwise({
			redirectTo: "/"
		});
});

app.run(function ($route, $http, $templateCache) {
	angular.forEach($route.routes, function (r) {
		if (r.templateUrl) {
			$http.get(r.templateUrl, {cache: $templateCache});
		}
	});
})