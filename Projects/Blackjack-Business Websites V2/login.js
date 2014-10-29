var loggedin = true;

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
		
		

		function validate_Password(){
			var Arr = document.forms["registerform"]["password"].value.match(/^[A-Za-z]+$/)
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid Password Field");
			}
		}

		
//VALIDATE ENTIRE FORM!
	function validate_Form(){
		if(!validate_Firstname()){
			console.log("return false");
		} else {
		if(!validate_Lastname()){
			return false;
		}
		if(!validate_Birthday()){
			return false;
			}
		if(!validate_Email()){
			return false;
			}
		if(!validate_Password()){
			return false;
			}
	console.log("return true");
	}
}	
	
if(loggedin == false)	{
	var tagID = document.getElementsById("ln");
		tagID.style.display='none';
		tagID.document.getElementsById("ln1");
		tagID.style.display='inline';	
	
} else {
	var tagID = document.getElementsById("ln");
		tagID.style.display='inline';
		tagID = document.getElementsById("ln1");
		tagID.style.display='none';
}


