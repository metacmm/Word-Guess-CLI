var Letter = function(letter){
    this.letter = letter;
    this.isGuessed = false;
    this.toString = function(){
        return this.isGuessed || this.letter === " "? this.letter : "_";
    }
    this.guessLetter = function(userGuess){
        if (this.letter === " " || this.letter.toLowerCase() === userGuess.toLowerCase()){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;