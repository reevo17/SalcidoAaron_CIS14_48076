//SHOPING CART SCRIPT!

var storeRegister = function(username, password){
	if (typeof(Storage) != "undefined") {
  	  // Store
   	 localStorage.setItem("username");
	 localStorage.setItem("password");
   	 // Retrieve
   	 document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	} else {
		alert("Sorry, you cannot register with this website because your browser does not support local storage to store information. We are a poor website...and stupid programmers, so we cannot utilize a database system...Sorry! You should use another browser or go to another website that uses Databases like you SHOULD BE ABLE TO DO!");
	}
	
var item = [chess, connect4, blackJack];

item.chess = new Object{var price = 50, var name = "Chess"};
item.connect4 = new Object{var price = 20,var  name = "Connect Four"};
item.blackJack = new Object{var price = 50,var name = "Black Jack"};