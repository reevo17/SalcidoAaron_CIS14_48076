var playing = true;
var dealerCards = []; //Dealers Cards
var playerCards = []; //Players Cards
var deck = new Deck();
var bet;
var money;
var moneyDisplay;
var message;
var turns = 0;

dealerCards.count = 0;
playerCards.count = 0;

function newDeck(){
	
}

function loaded() {
	alert( "THIS IS A TRIAL!<br> Thank you trying out our BlackJack Deluks computer game!<br> This is a game trial, you can play the game a total of 5 times before prompted to purchase the game. <br>" );
}
 
 function dealCards(){
	
 }

window.onload = loaded();

while(turn<5){
	dealCards();
		if(playerCards.count>21){
			//DEALER WINS
	}
		if(dealerCards.count>21){
			//PLAYER WINS
	}
	onsole.log("Code for Blackjack goes here")
	turn++;
}

