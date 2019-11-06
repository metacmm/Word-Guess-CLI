var Letter = require("./letter");
var Word = function(word){
    this.word = [];
    for(let i = 0; i < word.length; i++){
        this.word.push(new Letter(word[i]));
    }
    this.findALetter = false;
    this.displayWord = function(){
        return this.word.join(" ");
    }
    this.guessWord = function(userGuess){
        this.word.forEach(function(lett){
            lett.guessLetter(userGuess);
            if (lett.isGuessed){
                this.findALetter = true;
            }
        });
    }
}

/*
Word.prototype.add = function(lett){
    this.word.push(new Letter(lett));
}
*/
module.exports = Word;