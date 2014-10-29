var loggedin = true;

	function validate_Firstname(){
			var Arr = document.forms["input"]["firstname"].value.match(/^[A-Za-z]+$/g);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid FirstnameField");
			}
		}
		
		

		function validate_Lastname(){
			var x = document.Forms["input"]["lastname"].value;
			var re = new RegExp(/^[A-Za-z]*$/)
			var m = re.exec(x);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid FirstnameField");
			}
		}
				function validate_Birthday(){
			var x = document.Forms["input"]["birthday"].value;
			var re = new RegExp(/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/g)
			var m = re.exec(x);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid FirstnameField");
			}
		}
				function validate_Email(){
			var x = document.Forms["input"]["email"].value;
			var re = new RegExp(/^[A-Za-z]*[@][a-z]+[.][A-Za-z]*$/)
			var m = re.exec(x);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid FirstnameField");
			}
		}
				function validate_Password(){
			var Arr = document.forms["input"]["password"].value.match(/^[A-Za-z0-9_!$%&]+{5,20}$/g);
			if(Arr != null){
				for (i=0; i<Arr.length;i++){
					var result ="Arr=["+i+"]="+Arr[i];
					console.log(result);
				}
			}else{
				alert("Invalid FirstnameField");
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


