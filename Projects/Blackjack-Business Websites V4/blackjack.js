var playing = true;
var dealerCards = []; //Dealers Cards
var playerCards = []; //Players Cards
var bet;
var money;
var moneyDisplay;
var message;
var turn = 0;
var deck = new Array;

//CREATE A DECK
function shuffle(deck){
	var currentIndex = deck.length, temporaryValue, randomIndex ;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
 	 }

  return array;
};
//HOLD
function hold(){
		var playing = false;
		document.getElementById(Hit).disabled;
		document.getElementById(Hold).disabled;
}
//HIT
function dealCard(){
	this.cards.Value += this.cards.deck[0]
};
//THE PLAYER
player = {
	cards:{
		deck:[],
		Count:0,
		Value:0
	},
	Hit: dealCard(),
	Hold: hold()
};

//THE DEALER
dealer = {
	cards:{
		deck:[],
		Count:0,
		Value:0
	},
	Hit: dealCard(),
	Hold: hold()
};

