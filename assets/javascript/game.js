function hangman(){
    var directions = document.getElementById("directions");
    var guessed = document.getElementById("guessed");
    var correctWord = document.getElementById("correctWord");
    var words = ["tracer", "reaper", "widowmaker", "talon", "overwatch", "reinhardt", "zarya", "zenyatta"];
    var remainingGuesses = 10;
    var correctLetters = [];
    var wordToGuess = words[Math.floor(Math.random() * words.length)];
    var letterToGuess = [];
    var wordGuessed = false;
    var lettersGuessed = [];
    var lettersLeft;


    for (var i=0; i < wordToGuess.length; i++){
        correctLetters.push("_");
        letterToGuess[i] = wordToGuess[i]
    }
    correctWord.textContent = correctLetters.join('');
    console.log(letterToGuess);

    document.onkeyup = function(event) {
        document.getElementById('directions').innerHTML = '';
        var userGuess = event.key;
        $.each(letterToGuess, function(key, val){
            
            if (letterToGuess[key] === userGuess.toLowerCase()){
                    correctLetters[key] = val;
                    correctWord.textContent = correctLetters.join('');
                    console.log(correctLetters);
            }

        });  
        if ($.inArray(userGuess, letterToGuess) === -1 && $.inArray(userGuess, lettersGuessed) === -1){
            lettersGuessed.push(userGuess);
            guessed.textContent = lettersGuessed.join('');
            remainingGuesses--;
            console.log(remainingGuesses);
        }
        
    lettersLeft = $.inArray("_", correctLetters);
        if ( lettersLeft === -1){
                alert("Congratulations, you win! Your word was " + wordToGuess + "! Press OK to play again.");
                location.reload(true);
            }else if (remainingGuesses === 0){
                    alert("Sorry, you lose! Press OK to play again.");
                    location.reload(true);
            }
    }
};