(function() {
	var app = angular.module('CardsAgainstAssembly');
// call the controller
	app.controller('cardsController', function() {
//define parameters
		this.cards = [
			{question: 'Define HTTP.' },
			{question: 'Explain Box Model.' },
			{question: 'Is JavaScript case sensitive?'},
			{question: 'What is the difference between null and undefined?'},
			{question: 'Give an example of where an AJAX request would be used.' },
			{question: 'Name 3 of the minimum HTML elements needed for HTML documents.'},
			{question: 'Define JSON.'},
			{question: 'What is an AJAX request?'},
			{question: 'Define URL'}
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
