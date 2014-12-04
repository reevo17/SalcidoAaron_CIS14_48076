//THE PLAYER
function Player(){
	this.cards={
		Count:0,
		Value:0
	};
	this.CardPosition=1;
	this.Hit = function(card){
		var ndeck = deck.splice(0,1);
		var card = ndeck[0];
		console.log("Players "+this.CardPosition+" card is "+card);
		this.cards.value += card.Value;
		var cardArea = document.getElementById("PlayerCard"+this.CardPosition).innerHTML="<img src='"+card.img+"'/>";
		player.CardPosition++;
	};
	this.Hold= function(){
		var playing = false;
		document.getElementById(Hit).disabled;
		document.getElementById(Hold).disabled;
	};
}
//THE DEALER
function Dealer(){
	this.cards={
		deck:new Array,
		Count:0,
		Value:0
	}
	this.CardPosition=1;
	this.Hit = function(card){
		var ndeck = deck.splice(0,1);
		var card = ndeck[0];
		console.log("Dealers "+this.CardPosition+" card is "+card);
		this.cards.value += card.Value;
		var cardArea = document.getElementById("DealerCard"+this.CardPosition).innerHTML="<img src='"+card.img+"'/>";
		this.CardPosition++;
	}
	this.Hold= function(){
		console.log("Dealer is holding");
	}
	this.CardPosition=1
}