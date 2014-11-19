var playing = true;
var dealerCards = []; //Dealers Cards
var playerCards = []; //Players Cards
var deck = new Deck();
var bet;
var money;
var moneyDisplay;
var message;
var turn = 0;

//CREATE A DECK
function Deck(suit,number){
	Math.random();
}

function loaded() {
	alert( "THIS IS A TRIAL!<br> Thank you trying out our BlackJack Deluks computer game!<br> This is a game trial, you can play the game a total of 5 times before prompted to purchase the game. <br>" );
}
 
function dealCard(){
	for(i in this.cards){
		this.cards[i] = Math.random();
		this.cards.Count++;
	}
};
//THE PLAYER
player = {
	cards:{
		deck:[],
		Count:0,
		Value:0
	},
	Hit: dealCard();
};

//THE DEALER
dealer = {
	cards:{
		deck:[],
		Count:0,
		Value:0
	}
	Hit: dealCard();
};

window.onload = loaded();
$( document ).ready(function() {
    alert("THIS IS A TRIAL!<br> Thank you trying out our BlackJack Deluks computer game!<br> This is a game trial, you can play the game a total of 5 times before prompted to purchase the game. <br>");
});

//while(turn<6){
//	dealCards();
//		if(player.cards.Value>21){
//			//DEALER WINS
//	}
//		if(dealer.cards.Value>21){
//			//PLAYER WINS
//	}
//	console.log("Code for Blackjack goes here")
//	turn++;
//}

