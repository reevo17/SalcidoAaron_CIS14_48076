var loggedIn = true;

function checkLogin(){
	if(loggedin == false)	{
		document.getElementById("ln").style.display="none";
		document.getElementById('ln1').style.display ="inline";
	
	} else {
		document.getElementById("ln").style.display='inline';
		document.getElementById('ln1').style.display ='none';
	}
}

