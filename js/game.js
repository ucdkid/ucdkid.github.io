// Javascript game created by Allen Amusin 2016

// Variables
var mysteryNumber = 7;
var playerGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var playerScore = 0;

// Initialize the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var outputScore = document.querySelector("#outputScore");

// Button code
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click",clickHandler);

function clickHandler()
{	
	if(guessesRemaining > 0)
	{
	playerGuess = parseInt(input.value);
	
	if(playerGuess === mysteryNumber)
	{
		output.innerHTML = "You win!";
		playerScore = playerScore+guessesRemaining
		outputScore.innerHTML = "Your current score is " + playerScore+ "!";
		mysteryNumber = Math.floor(Math.random()*100);
		guessesMade = 0;
		guessesRemaining = 10;
	}
	else if(playerGuess !== mysteryNumber)
	{
		if(playerGuess > mysteryNumber)
		{
			output.innerHTML = "That's too high!";
			guessesMade ++;
			guessesRemaining --;
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left.";
			}
			else if(guessesMade > 1)
			{
				if(guessesMade === 9)
				{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left.";
				}
				else if(guessesMade > 9)
				{
				output.innerHTML = "Game over! ";
				outputScore.innerHTML = "Your current score is " + playerScore+ "!";
				mysteryNumber = Math.floor(Math.random()*100);
				guessesMade = 0;
				guessesRemaining = 10;
				}
				else
				{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left.";
				}
			}
		}
		else if(playerGuess < mysteryNumber)
		{
			output.innerHTML = "That's too low!";
			guessesMade ++;
			guessesRemaining --;
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left.";
			}
			else if(guessesMade > 1)
			{
				if(guessesMade === 9)
				{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left.";
				}
				else if(guessesMade > 9)
				{
				output.innerHTML = "Game over! ";
				outputScore.innerHTML = "Your current score is " + playerScore+ "!";
				mysteryNumber = Math.floor(Math.random()*100);
				guessesMade = 0;
				guessesRemaining = 10;
				}
				else
				{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left.";
				}
			}
		}
		else
		{
			output.innerHTML = "Try again!";
		}
	}
	else
	{
		output.innerHTML = "Stop playing around and play the game!";
	}
	}
	else
	{
		outputScore.innerHTML = "Your final score is " + playerScore+ "!";
		output.innerHTML = "Game Over!";	
	}
}