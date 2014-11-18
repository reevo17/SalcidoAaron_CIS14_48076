//CONNECT FOUR
var connectFour = {
	name: "Connect Four",
	price: 45
};
//BATTLESHIP
var battleShip = {
	name: "Chess",
	price: 175
};
//BLACKJACK
var blackJack = {
	name: "Black Jack",
	price: 50
};

//ADD ITEMS TO SHOPPING CART
function addItem(item){
	item = this;
	shoppingCart.total += this.price;
	shoppingCart.items += this.name;
}
//ADD BLACKJACK
//function addBlackjack(){
//	shoppingCart.total += blackJack.price;
//	shoppingCart.items += blackJack.name;
//}	
//ADD CONNECT FOUR
//function addConnectfour(){
//	shoppingCart.total += connectFour.price;
//	shoppingCart.items += connectFour.name;
//}
//ADD BATTLESHIP
//function addBattleship(){
//	shoppingCart.total += battleShip.price;
//	shoppingCart.items += battleShip.name;
//}
//REMOVE ITEMS
//ENTER CODE HERE
//DISPLAY ITEMS IN SHOPPING CART
function displayItems(){
	var d = document.getElementById("shoppingItems");
		for(i in shoppingCart.items){
			d.innerHTML="<center>"+shoppingCart.items[i]+"</center><br>";
		}
};


//SHOPPING CART
var shoppingCart = {
	items: ["Connect Four"],
	total: 0
};
