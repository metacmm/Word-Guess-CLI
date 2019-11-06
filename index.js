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
                inquirer.prompt([
                    {
                        name: "userGuess",
                        message: "Guess a letter!",
                        type: "input"
                    }
                ]).then(function (response) {
                    curWord.guessWord(response.userGuess);
                    let display = curWord.displayWord();
                    console.log(display + "\n");
                    if (curWord.findALetter) {
                        if (curWord.strWord === answer) {
                            console.log("\x1b[32m%s\x1b[0m","You got it right!!!");
                            startGame();
                        } else {
                            console.log("\x1b[32m%s\x1b[0m","CORRECT!");
                            playRound();
                        }
                    } else {
                        count--;
                        if (count === 0) {
                            console.log("\x1b[31m%s\x1b[0m","You failed!!!");
                            startGame();
                        } else {
                            console.log("\x1b[31m%s\x1b[0m", "INCORRECT!");
                            console.log(count + " guess remaining!");
                            playRound();
                        }
                    }
                });
            }
            playRound();
        } else {
            return;
        }
    });
}

startGame();
