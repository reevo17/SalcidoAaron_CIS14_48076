	var wins = 0;
	var turn = 1;
	var admin = localStorage.getItem("admin");
	var Obj =localStorage.getItem("LoggedIn");
	//CHECK IF LOGGED IN
	function checkLogin(){
		if(Obj == "true"){
			var x = document.getElementsByClassName("ln1");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			var y = document.getElementsByClassName("ln");
			for (t = 0; t < y.length; t++) {
				y[t].style.display = "inline";
			}
		}else{
			var x = document.getElementsByClassName("ln1");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "inline";
			}
			var y = document.getElementsByClassName("ln");
			for (t = 0; t < y.length; t++) {
				y[t].style.display = "none";
			}
			alert("You must be logged in to play Game Trials! Please log in and come back.");
			window.location.replace("login.html");
		}
	}
	//CHECK IF ADMIN IS LOGGED IN
	function checkAdmin(){
		var x = document.getElementsByClassName("admin");
		if(admin == "true"){
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "block";
			}
		}else{
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
		}
	}
	function logOut(){
		localStorage.removeItem("LoggedIn");
		location.reload();
	}
var deck = [
//`````````````````CLUBS``````````````````````````
	c1 = {img:"cards/1.png",value:1},
	c2 = {img:"cards/2.png",value:2},
	c3 = {img:"cards/3.png",value:3},
	c4 = {img:"cards/4.png",value:4},
	c5 = {img:"cards/5.png",value:5},
	c6 = {img:"cards/6.png",value:6},
	c7 = {img:"cards/7.png",value:7},
	c8 = {img:"cards/8.png",value:8},
	c9 = {img:"cards/9.png",value:9},
	c10 = {img:"cards/10.png",value:10},
	c11 = {img:"cards/11.png",value:10},
	c12 = {img:"cards/12.png",value:10},
	c13 = {img:"cards/13.png",value:10},
//```````````````DIAMONDS```````````````````````````
	d1 = {img:"cards/14.png",value:1},
	d2 = {img:"cards/15.png",value:2},
	d3 = {img:"cards/16.png",value:3},
	d4 = {img:"cards/17.png",value:4},
	d5 = {img:"cards/18.png",value:5},
	d6 = {img:"cards/19.png",value:6},
	d7 = {img:"cards/20.png",value:7},
	d8 = {img:"cards/21.png",value:8},
	d9 = {img:"cards/22.png",value:9},
	d10 = {img:"cards/23.png",value:10},
	d11 = {img:"cards/24.png",value:10},
	d12 = {img:"cards/25.png",value:10},
	d13 = {img:"cards/26.png",value:10},
//``````````````````````````````SPADES``````````````````````````
	s1 = {img:"cards/27.png",value:1},
	s2 = {img:"cards/28.png",value:2},
	s3 = {img:"cards/29.png",value:3},
	s4 = {img:"cards/30.png",value:4},
	s5 = {img:"cards/31.png",value:5},
	s6 = {img:"cards/32.png",value:6},
	s7 = {img:"cards/33.png",value:7},
	s8 = {img:"cards/34.png",value:8},
	s9 = {img:"cards/35.png",value:9},
	s10 = {img:"cards/36.png",value:10},
	s11 = {img:"cards/37.png",value:10},
	s12 = {img:"cards/38.png",value:10},
	s13 = {img:"cards/39.png",value:10},
//`````````````````````````````````````````````````HEARTS````````````````````````````
	h1 = {img:"cards/40.png",value:1},
	h2 = {img:"cards/41.png",value:2},
	h3 = {img:"cards/42.png",value:3},
	h4 = {img:"cards/43.png",value:4},
	h5 = {img:"cards/44.png",value:5},
	h6 = {img:"cards/45.png",value:6},
	h7 = {img:"cards/46.png",value:7},
	h8 = {img:"cards/47.png",value:8},
	h9 = {img:"cards/48.png",value:9},
	h10 = {img:"cards/49.png",value:10},
	h11 = {img:"cards/50.png",value:10},
	h12 = {img:"cards/51.png",value:10},
	h13 = {img:"cards/52.png",value:10}
//==============================END OF CARDS ===============================
];
Deckshuffle=function(nTimes, deck){
	for(var fan=1;fan<=nTimes;fan++){
		for(var num=deck.length-1;num>=1;num--){
			//Swap the cards
			var rand=Math.floor((Math.random()*num)); 
			var temp=deck[num];
			deck[num]=deck[rand];
			deck[rand]=temp;
		}
	}
}
//SHUFFLE
function shuffle(nTimes, deck){
	for(var fan=1;fan<=nTimes;fan++){
		for(var num=deck.length-1;num>=1;num--){
			//Swap the cards
			var rand=Math.floor((Math.random()*num)); 
			var temp=deck[num];
			deck[num]=deck[rand];
			deck[rand]=temp;
		}
	}
}
//WRITE MESSAGE TO THE MESSAGE AREA ID
	//THE PLAYER
function Player(){
	this.cards={
		Count:0,
		Value:0
	};
	this.CardPosition=1;
	this.Playing = true;
	this.Hit = function(card){
		var ndeck = deck.splice(0,1);
		var card = ndeck[0];
		player.cards.Value += card.value;
		document.getElementById("PlayerCard"+player.CardPosition).innerHTML="<img src='"+card.img+"'/>";
		player.CardPosition++;
		var node = document.createElement("LI");                 // Create a <li> node
		var textnode = document.createTextNode("Your card value: "+player.cards.Value);         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("messageArea").appendChild(node);
		breakLine();
		checkValues(player, dealer, deck);
		console.log("Players "+(player.CardPosition-1)+" card is worth "+card.value+". Total: "+player.cards.Value);
	};
	this.Hold= function(){
		if(dealer.cards.Value<player.cards.Value){
			//PLAYER WINS
			alert("You won after holding!");
			console.log("The dealer has less cards");
			clean(player, dealer, deck);
			turn++
			wins++;
		}else if(dealer.cards.Value>player.cards.Value){
			//DEALER WINS!
			console.log("Player held and won!");
			clean(player, dealer, deck);
			alert("The dealer won after you held!");
			turn++
		}else if(dealer.cards.Value==player.cards.Value){
			//DEALER WINS
			console.log
			writeMessage("OOh! You tied! Dealer wins!!");
			Alert("You tie! Dealer wins by default! Try again, looser...or are you too chicken???");
			clean(player, dealer, deck);
			turn++
		}
	}
};
function breakLine(){
	var br = document.createElement("BR");
	document.getElementById("messageArea").appendChild(br);
	}
//THE DEALER
function Dealer(){
	this.cards={
		deck:new Array,
		Count:0,
		Value:0
	}
	this.Playing = true;
	this.CardPosition=1;
	this.Hit = function(card){
		var ndeck = deck.splice(0,1);
		var card = ndeck[0];
		dealer.cards.Value += card.value;
			if(dealer.CardPosition<=8){
			document.getElementById("DealerCard"+dealer.CardPosition).innerHTML="<img src='"+card.img+"'/>";
			dealer.CardPosition++;
			}else{
			console.log("Dealer cards go over 8 slots");
			}
		var node = document.createElement("LI");                 							// Create a <li> node
		var textnode = document.createTextNode("Dealers card value: "+dealer.cards.Value); // Create a text node
		node.appendChild(textnode);                             						  // Append the text to <li>
		document.getElementById("messageArea").appendChild(node);
		checkValues(player, dealer, deck);
		console.log("Dealers "+(dealer.CardPosition-1)+" card is worth "+card.value+". Total: "+dealer.cards.Value);
	}
	this.Hold= function(){
		console.log("Dealer is holding");
		this.Playing = false;
	}
	this.CardPosition=1
}
function writeMessage(message){
		var node = document.createElement("LI");                 // Create a <li> node
		document.getElementById("messageArea").appendChild(node);
		var textnode = document.createTextNode(message);         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("messageArea").appendChild(node);
}
function buttonHit(player, nDeck){
	if(dealer.cards.Value<15){
			dealer.Hit(nDeck);
	}
	player.Hit();
}