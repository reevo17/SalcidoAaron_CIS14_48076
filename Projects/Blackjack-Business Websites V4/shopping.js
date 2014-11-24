//CONNECT FOUR
var game = {
	name = this.name;
	price = this.price;	
} 

//BATTLESHIP
var battleShip = new game("Battle Ship", 175);
var blackJack = new game("Black Jack", 50);
var connectFour = new game("Connect Four", 45);


//ADD ITEMS TO SHOPPING CART
function addItem(item){
	var item = 
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
	scan: function(game){
		switch(game){
		case "Connect Four":
			this.add(45);
			break;
		case "Black Jack":
			this.add(50);
			break;
		case "Battle Ship":
			this.add(175);
			break;
		}
		return true;
	},
	add : function(gameCost){
		this.total += gameCost;
			}
};
