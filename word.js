var Letter = require("./letter");
var Word = function(word){
    this.word = [];
    this.strWord = "";
    this.findALetter = false;
    for(let i = 0; i < word.length; i++){
        this.word.push(new Letter(word[i]));
    }
    this.displayWord = function(){
        return this.word.join(" ");
    }
    this.guessWord = function(userGuess){
        this.word.forEach(function(lett){
            lett.guessLetter(userGuess);
        });
        this.findALetter = word.toLowerCase().includes(userGuess.toLowerCase());
        this.strWord = this.word.join("");
    }
}

/*
Word.prototype.add = function(lett){
    this.word.push(new Letter(lett));
}
*/
module.exports = Word;