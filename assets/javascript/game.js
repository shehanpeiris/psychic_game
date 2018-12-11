// Create an array containing all the possible letters from which computer can choose its guess.
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Variable created to randomnly assign Computer's "choice"
var cpuChoice = function() {
    possibleLetters[Math.floor((Math.random())*26)];
    };

// Create base variables for the game.
var wins = 0;
var losses = 0;
var guesses = 9;

// Creating a function that will run after user loses, increases loss count, resets guesses, alerts user to their loss, and updates loss text.
var lossFunction = function() {
    losses++;
    alert("You lost!");
    $("#loss-text").text("Losses: " + losses);
    guesses = 9;
    cpuChoice();
}

// Creating a function that will run after user wins, increases win count, resets guesses, alerts user to their victory, and updates win text.
var winFunction = function() {
    wins++;
    alert("Congrats! You won!");
    $("#win-text").text("Wins: " + wins);
    guesses = 9;
    cpuChoice();
}

document.onkeyup = function(event) {

    cpuChoice();
    console.log("Computer's guess is: " + cpuChoice());
    var userGuess = event.key.toLowerCase();
    console.log("User's guess is: " + userGuess);
    if (userGuess === cpuChoice) {
        winFunction();
    } else {
        guesses--;
        $("#guesses-left-text").text("Guesses left: " + guesses);
        $("#guesses-text").append(userGuess);
            if (guesses < 1) {
                lossFunction();    
            };
        }
    };


