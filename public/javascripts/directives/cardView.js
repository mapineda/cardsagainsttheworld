(function() {
	var app = angular.module('CardsAgainstAssembly');

	app.directive('card', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '_cardView.html'
		};
	});
});