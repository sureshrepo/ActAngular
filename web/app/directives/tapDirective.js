app.directive('tapDirective', function () {
	var isTouchDevice = !!("ontouchstart" in window);
	return function (scope, elm, attrs) {
		if (isTouchDevice) {
			var tapping = false;
			elm.bind('touchstart', function () {
				tapping = true;
			});
			elm.bind('touchmove', function () {
				tapping = false;
			});
			elm.bind('touchend', function () {
				tapping && scope.$apply(attrs.tapDirective);
			});
		} else {
			elm.bind('click', function () {
				scope.$apply(attrs.tapDirective);
			});
		}
	};
});