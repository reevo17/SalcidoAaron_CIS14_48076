var shoppingCart ={
	total : 0,
	items : [],
	add : function(itemCost){
		this.total += (itemCost || 0);
       this.lastTransactionAmount = itemCost;
    },
	scan : function(item){
        switch (item){
            case "connectFour": 
				this.add(45); 
				alert("Connect Four was added to your Cart. Total: $"+shoppingCart.total);
				shoppingCart.items.push("Connect Four");
				console.log(shoppingCart);
				break;
            case "BlackJack": 
				this.add(50);
				shoppingCart.items.push("Black Jack");
				alert("Black Jack was added to your Cart. Total: $"+shoppingCart.total);
				console.log(shoppingCart);
				break;
            case "BattleShip": 
				this.add(175); 
				shoppingCart.items.push("Battle Ship");
				alert("Battle Ship was added to your Cart! Total: $"+shoppingCart.total);
				console.log(shoppingCart);
				break;
        }
        return true;
	},
	voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    }
}
window.onbeforeunload = function(){
	alert("Shopping Cart Saved! Total: "+shoppingCart.total);
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}