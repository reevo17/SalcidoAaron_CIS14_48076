	var admin = localStorage.getItem("admin");
	var user = JSON.parse(localStorage.getItem("user"));
	var Obj =localStorage.getItem("LoggedIn");
	function logOut(){
		localStorage.removeItem("LoggedIn");
		location.reload();
	}
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
		}
	}
		//CHECK IF ADMIN IS LOGGED IN
	function checkAdmin(){
		var x = document.getElementById("admin");
		if(admin == "true"){
				x.style.display = "block";
		}else{
				x.style.display = "none";
			}
		}
	
	function logOut(){
		localStorage.removeItem("LoggedIn");
		location.reload();
	}
		//LOGIN FUNCTION!
	function login(){
		console.log("Function is happening");
		console.log(document.forms["loginform"]["username"].value);
		if(document.getElementById("LoginUser").value == user.username&&document.getElementById("LoginPassword").value == user.password){
			localStorage.setItem("LoggedIn","true");
			console.log("Logged In! Function Ran!");
			alert("Welcome "+user.username);
			window.location.replace("index.html");
			return true;
		} else{
		console.log("Function occured, not logged in though...");
		return false;
		}
	}
	function logOut(){
		localStorage.removeItem("LoggedIn");
		location.reload();
	}