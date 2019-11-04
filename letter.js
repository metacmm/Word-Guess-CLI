function Letter(letter){
    this.letter = letter;
    this.isGuessed = false;
    this.displayLetter = function(){
        return isGuessed? this.letter : "_";
    }
    this.guessLetter = function(userGuess){
        isGuessed = this.letter === userGuess;
    }
}

module.exports = Letter;