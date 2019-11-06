var Word = require("./word");
var inquirer = require("inquirer");
var candidates = require("./data");

var startGame = function () {
    inquirer.prompt([
        {
            name: "startNewGame",
            message: "Do you want to start a new word guess game?",
            type: "confirm"
        }
    ]).then(function (response) {
        if (response.startNewGame) {
            let count = 10;
            let rnd = Math.floor(Math.random() * candidates.length);
            let answer = candidates[rnd];
            let curWord = new Word(answer);

            var playRound = function () {
                if (display === answer || count === 0) {
                    let completeText = count === 0 ? "You failed!" : "You got it right!";
                    console.log(completeText);
                    startGame();
                }
                inquirer.prompt([
                    {
                        name: "userGuess",
                        message: "Guess a letter!",
                        type: "input"
                    }
                ]).then(function (response) {
                    curWord.guessWord(response.userGuess);
                    let display = curWord.displayWord();
                    console.log(display);
                    if (curWord.findALetter) {
                        console.log("Correct!");
                    } else {
                        count--;
                        console.log("Incorrect!");
                        console.log(count + " guess remaining!!!");
                    }
                    playRound();
                });
            }
            playRound();
        }
    });
}

startGame();
