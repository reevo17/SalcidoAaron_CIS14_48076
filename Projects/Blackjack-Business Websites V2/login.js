var loggedin = false;


//VALIDATE USERNAME!
	function validate_Username(){
			var Arr = document.forms["registerform"]["username"].value.match(/^[A-Za-z]+$/g);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid Username Field");
			}
		}
		
		
//VALIDATE PASSWORD
		function validate_Password(){
			var Arr=document.forms["registerform"]["password"].value.match(/^[:allnum:*&%$#@!]{5,15}$/);
			if(Arr1 != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid Password Field");
			}
		}
//VALIDATE EMAIL ADDRESS
		function validate_Email(){
			var Arr = document.forms["registerform"]["email"].value.match(/^[A-Za-z]+[@][A-Z-a-z][.][A-Za-z]$/);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid Email Field");
			}
		}

		
		
//VALIDATE ENTIRE FORM!
	function validate_Form(){
		if(!validate_Firstname()&& if(!validate_Lastname()&& if(!validate_Birthday()&& !validate_Email()&& if(!validate_Password()){
			console.log("false"); 
			return false;
				}else{
			console.log("true");
			return true;
			var loggedin = true;
			
	}
}	


	
if(loggedin = false)	{
	var tagID = document.getElementsById("ln");
		tagID.style.display='none';
		document.getElementById('ln1').style.visibility = 'visible';
	
} else {
	document.getElementById('ln').style.visibility = 'visible';
		tagID = document.getElementsById("ln1");
		tagID.style.display='none';
}


