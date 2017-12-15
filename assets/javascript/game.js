//Psychic: the game

/*Start by declaring a variable that contains an array with all the letters
the user will have to guess from*/



var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var guesses = 9;

	//I need a function that calls upon a random index from the array above

function randomPick(arr) {
	pick = arr[Math.floor(Math.random() * letterArray.length)];
	pick = pick.toLowerCase();
	/*console.log(pick);*/
}

randomPick(letterArray);


	//I need a function to alert the user to only use the specified letters
	//in the array above

//this will capture keyboard input and respond with specified functions
document.onkeyup = function(event) {

	//This will capture the key pressed by the user, convert it to lowercase
	//and save it to a variable

	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	//if the letter matches the pick, then wins will go by one

	if (letter === pick) {
		wins++;
		//and a new word is chosen
		randomPick(letterArray);
		/*console.log(wins);
		console.log(pick);*/
	}

	//otherwise, the guesses will decrease by one
	else {
		guesses--;
		randomPick(letterArray);
		/*console.log(guesses);
		console.log(pick);*/
		//if the user runs out of guesses
		if (guesses === 0) {
			//guesses 'resets' back to 9
			guesses =9;
			//you lose, loser
			losses++;
			//a new word is chosen
			randomPick(letterArray);
			/*console.log(guesses);
			console.log(losses);
			console.log(pick);*/
		}
	}

	//This variable will hold html content. With this, the letters already
	//guessed will be displayed. as well as the wins, losses, and ties
	




	

};
