(function() {
	var app = angular.module('CardsAgainstAssembly');

	app.controller('cardsController', function() {
		
		this.cards = [
			{question: 'I get by with a little help from ______', show: false }, 
			{question: 'The field trip was ruined by _______', show: false },
			{question: 'Backbone is a ___________', show: false },
			{question: 'This guy __________(s)', show: false}
		];


		return this;
	});
})();

// (function() {
// 	var app = angular.module('CardsAgainstAssembly');

// 	app.controller('cardsController', function() {

// 		this.cards = [
// 			{ question: 'I couldn\'t complete my assignment because ________', show: false },
// 			{ question: 'I get by with a little help from ________', show: false },
// 			{ question: 'The field trip was completely ruined by ________', show: false },
// 			{ question: 'Kyle is a ________', show: false },
// 			{ question: 'What is my secret power?', show: false }
// 		];

// 		return this;
// 	});
// })();