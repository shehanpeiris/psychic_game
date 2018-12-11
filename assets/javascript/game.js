// Create an array containing all the possible letters from which computer can choose its guess.
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Created a function to randomnly assign Computer's "choice".
var cpuChoice = function() {
    return(possibleLetters[Math.floor((Math.random())*26)]);
    };

// Run the cpuChoice function to have a computer guess for when user loads page. Console.log it as a test to make sure it's working properly.
var cpuGuess = cpuChoice();
console.log("Computer's guess is: " + cpuGuess);

// Create base variables for the game.
var wins = 0;
var losses = 0;
var guesses = 9;

// Creating a function that will run after user loses, increases loss count, resets guesses, alerts user to their loss, updates loss text and re-runs the cpuChoice function.
var lossFunction = function() {
    losses++;
    alert("You lost!");
    $("#loss-text").text("Losses: " + losses);
    guesses = 9;
    $("#guesses-left-text").text("Guesses left: " + guesses);
    $("#guesses-text").text("Your guesses so far: ");
    cpuChoice();
    cpuGuess = cpuChoice();
    console.log("Computer's guess is: " + cpuGuess);
}

// Creating a function that will run after user wins, increases win count, resets guesses, alerts user to their victory, updates win text and re-runs cpuChoice function.
var winFunction = function() {
    wins++;
    alert("Congrats! You won!");
    $("#win-text").text("Wins: " + wins);
    guesses = 9;
    $("#guesses-left-text").text("Guesses left: " + guesses);
    $("#guesses-text").text("Your guesses so far: ");
    cpuChoice();
    cpuGuess = cpuChoice();
    console.log("Computer's guess is: " + cpuGuess);
}

document.onkeyup = function(event) {    
    var userGuess = event.key.toLowerCase();
    console.log("User's guess is: " + userGuess);
    if (userGuess === cpuGuess) {
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


