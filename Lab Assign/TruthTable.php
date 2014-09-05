<script type="text/java">
	/*
		Author: Aaron C Salcido
		September 3rd, 2014
		Purpose: To create a table of truths using Javascript
				 to exemplify Logical Operators
	*/
</script>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Truth Table</title>
</head>

<body>

<!--TABLE START-->
<table border="2">
	<!--table head-->
	<thead>
    <tr>
    	<th colspan="13"> Truth Table for Logical Operators</th>
    </thead>

	
    <!--ROW 1-->
    <tr>
    	<th>&nbsp;</th>
        <th>X</th>
        <th>Y</th>
        <th>!X</th>
        <th>!Y</th>
        <th>X&&Y</th>
        <th>X||Y</th>
        <th>X^Y</th>
        <th>X^Y^Y</th>
        <th>X^Y^X</th>
        <th> !(X&&Y)</th>
        <th> !(X||!Y)</th>
        <th> !(X&&!Y)</th>
    </tr>
    
    <!-- ROW 2-->
    <tr>
    	<script type="text/javascript">;
		//ALL <TD> IN THIS ROW HAVE BEEN EDITTED SO THE TRUE OR FALSE STATEMENTS ARE DISPLAYED AS ARIAL TEXT. 
		
		//IT MAY LOOK LIKE ALOT, BUT IT IS JUST THE style= IN THE TAGS
		
		//Variables, we will be edditing their results below
		var x= false;
		var y =true;


		//Shows what each variable equals to help read the chart.
		document.write("<td ><strong>X=F,Y=T</strong></td>");
		
		document.write("<td style=font-family:arial>"+(x?'T':'F')+"</td>");			
		//Tests to see if X is true or not
		//If true, the result will be a T in the frist row, if false, the result will show an F
		document.write("<td style=font-family:arial>"+(y?'T':'F')+ "</td>");
		document.write("<td style=font-family:arial>"+(!x?'T':'F')+"</td>")
		document.write("<td style=font-family:arial>"+(!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x||y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>" + (x^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^x?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x||!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&!y?'T':'F')+"</td>");
		
        </script>
<!-- END ROW-->
 </tr>
 
 
 <!--ROW 3-->
 <tr>
<script type="text/javascript">;

  <!-- REDEFINING VARIABLE Y-->
 	 var y = false;
  
  //Shows what each variable means to help read the chart
    	document.write("<td><strong>X=F,Y=F</strong></td>");
		
		//Begining of the chart
		document.write("<td style=font-family:arial>"+(x?'T':'F')+"</td>");			
		document.write("<td style=font-family:arial>"+(y?'T':'F')+ "</td>");
		
		document.write("<td style=font-family:arial>"+(!x?'T':'F')+"</td>")
		document.write("<td style=font-family:arial>"+(!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x||y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>" + (x^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^x?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x||!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&!y?'T':'F')+"</td>");
		
     
   
</script>
<!-- END ROW-->
</tr> 

<!--ROW 4-->
<tr>
	<script type="text/javascript">
	
	<!-- REDEFINING VARIABLES AGAIN-->
		var x = true;
		var y = true;
		
		//Shows what each variable equals to help the user read the chart
		document.write("<td><strong>X=T,Y=T</strong></td>");
		
		//Begining of the chart
		document.write("<td style=font-family:arial>"+(x?'T':'F')+"</td>");			
		document.write("<td style=font-family:arial>"+(y?'T':'F')+ "</td>");
		
		document.write("<td style=font-family:arial>"+(!x?'T':'F')+"</td>")
		document.write("<td style=font-family:arial>"+(!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x||y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>" + (x^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^x?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x||!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&!y?'T':'F')+"</td>");
		
	</script>
</tr>

<!-- ROW 5-->
<tr>
<script type="text/javascript">
//REDEFINING VARIABLES AGAIN
	var x = true;
	var y = false;
	
	//Helps the reader read the chart, shows what each variable means
	document.write("<td><strong>X=T,Y=F</strong></td>");
	
	document.write("<td style=font-family:arial>"+(x?'T':'F')+"</td>");			
			
		//Begining of the chart
		document.write("<td style=font-family:arial>"+(y?'T':'F')+ "</td>");
		
		document.write("<td style=font-family:arial>"+(!x?'T':'F')+"</td>")
		document.write("<td style=font-family:arial>"+(!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x||y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>" + (x^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(x^y^x?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x||!y?'T':'F')+"</td>");
		document.write("<td style=font-family:arial>"+(!x&&!y?'T':'F')+"</td>");
		
</script>
<!-- END ROW-->
</tr>
<!-- END TABLE--> 
 </table>
 	
</body>
</html>
