//SHOPING CART SCRIPT!

function storeRegister(username, password){
	if (typeof(Storage) != "undefined") {
  	  // Store
   	 localStorage.setItem("username");
	 localStorage.setItem("password");
   	 // Retrieve
   	 document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	} else {
		alert("Sorry, you cannot register with this website because your browser does not support local storage to store information. We are a poor website...and stupid programmers, so we cannot utilize a database system...Sorry! You should use another browser or go to another website that uses Databases like you SHOULD BE ABLE TO DO!");