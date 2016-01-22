(function() {
	var app = angular.module('CardsAgainstAssembly');
// call the controller
	app.controller('cardsController', function() {
//define parameters
		this.cards = [
			{question: 'I get by with a little help from ______' }, 
			{question: 'The field trip was ruined by _______' },
			{question: 'Backbone is a ___________'},
			{question: 'This guy __________(s)'}
		];
		//create new card
		this.addCard = function() {
			console.log(this.newCard.question);
			this.cards.push({
				question: this.newCard.question
			});
			console.log(this.cards);

			this.newCard.question = null;
		};

		return this;
	});
})();


