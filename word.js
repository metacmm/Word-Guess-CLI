var Letter = require("./letter");
var Word = function(word){
    this.word = [];
    for(let i = 0; i < word.length; i++){
        this.word.push(new Letter(word[i]));
    }
    this.displayWord = function(){
        let displayString = "";
        this.word.forEach(function(lett){
            displayString += lett.displayLetter();
        });
        return displayString;
    }
    this.guessWord = function(userGuess){
        this.word.forEach(function(lett){
            lett.guessLetter(userGuess);
        });
    }
}

module.exports = Word;