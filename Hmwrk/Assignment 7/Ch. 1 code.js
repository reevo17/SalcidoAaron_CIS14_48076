	var word = "bottles";
	var count = 99;
	
	while (count >0) {
		console.log(count + " " + word + " of beer on the wall,");
		console.log(count + " " + word + " of beer,");
		//Spaces added into the string to ensure that the words do not stick to eache other, that is what the " " parts are for.
		console.log("Take one  down, pass it around,");
		count = count -1
// Each time the script loops, the number of bottles decreases by 1
		if (count > 0) {
			console.log(count + " " + word + " of beer on the wall.");
		} else {
			console.log("No more" + word + " of beer on the wall."); 
//When number of bottles reaches zero, console.log log will display this text
		}
	}