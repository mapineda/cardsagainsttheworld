(function() {
	var app = angular.module('CardsAgainstAssembly');

	app.controller('cardsController', function() {
		this.question = "I couldn't complete my assignment because ___________";

		this.cards = [
			{question: 'I get by with a little help from ______'},
			{question: 'The field trip was ruined by _______'},
			{question: 'Backbone is a ___________'},
			{question: 'This guy __________(s)'}
		];

		return this;
	});
})();