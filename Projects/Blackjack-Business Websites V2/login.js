function checkLogin(){
	if(loggedin = false)	{
		document.getElementsById("ln").style.display='none';
		document.getElementById('ln1').style.display ='inline';
	
	} else {
		document.getElementsById("ln").style.display='inline';
		document.getElementById('ln1').style.display ='none';
	}
}

