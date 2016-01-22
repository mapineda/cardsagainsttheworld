(function() {
	var app = angular.module('CardsAgainstAssembly', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
// using state as opposed for wise
		$stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: '_homeView.html',
	    }).state('new', {
	      url: '/new',
	      templateUrl: '_newView.html',
	    }).state('rules', {
	    	url: '/rules',
	    	templateUrl: '_rulesView.html',
	    });
	});
})();