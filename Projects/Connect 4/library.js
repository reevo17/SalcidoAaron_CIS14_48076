// Connect 4 Function Library
//	Variable Library 
//	Array Library

var turn = 0; 		//TURN COUNTER
var chipA =""; 		//PLAYER 1
var chipB =""; 		//PLAYER 2
var playing = true; //Bool to check if playing
var column = col;
var row = row;
var inARow = 0; 	//Counter to see how many chips are in a row
var occupied = false;
var h = 0; //Horizontal
var v = 0; //Verticle
var d = 0; //Diagnal
var winner = ""; //Will Show who the winner is in document.write
var canPlace = true; //Bool to check if the player can place in a row