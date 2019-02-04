function hangman(){
    var words = [tracer, reaper, widowmaker, talon, overwatch, reinhardt, zarya, zenyatta];
    var remainingGuesses = 15;
    var englishLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var guessedLetters = [];
    var wordToGuess = words[Math.floor(Math.random() * words.length)];
    var letterToGuess;

    $.each(wordToGuess, function(){
        guessedLetters.push("_");
    });


    document.onkeyup = function(event){
        var userGuess = event.key;
        $.each(letterToGuess, function(key, val){
            if (letterToGuess === userGuess){
                    guessedLetters[key] = letterToGuess[key];
                    console.log(guessedLetters);
            } else {
                remainingGuesses--;
                    console.log(remainingGuesses);
            }
        });     
    }
};