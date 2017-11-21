$(document).ready(function () {

    let currentGuess = 0;
    let wins = 0;
    let losses = 0;
    let randomNumber = 0;
    let pikachuPoint;
    let jigglypuffPoint;
    let snorlaxPoint;
    let psyduckPoint;


    function randomNumPokemon() {
        let pokePoint = Math.floor(Math.random() * 12) + 1;
        return pokePoint;
    }

    // create a random number between 19 and 120.
    function randomNumGen() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#random-area").text(randomNumber);

    }

    randomNumGen();
    updateScore();
    pikachuPoint = randomNumPokemon();
    jigglypuffPoint = randomNumPokemon();
    snorlaxPoint = randomNumPokemon();
    psyduckPoint = randomNumPokemon();


    function updateCurrentGuess() {
        $("#score-area").text(currentGuess);

    }

    function updateScore() {
        $("#win-area").html("wins: " + wins);
        $("#lose-area").text("losses: " + losses);
    }

    function resetGame() {
        currentGuess = 0;
        pikachuPoint = randomNumPokemon();
        jigglypuffPoint = randomNumPokemon();
        snorlaxPoint = randomNumPokemon();
        psyduckPoint = randomNumPokemon();

    }

    function winOrLose() {
        if (currentGuess === randomNumber) {
            alert("You Win! Pika!");
            alert("Your total score of " + currentGuess + " matches!");
            let playAgain = confirm("Did you want to play again?");
            if (playAgain == true) {
                alert("Click on a Pokemon and try to match the number again!");
            } else {
                alert("Gave Over!");
            }
            wins++;
            updateScore();
            $("#score-area").text(0);
            resetGame();
            randomNumGen();

        } else if (currentGuess > randomNumber) {
            alert("You Lose! Psy-ay-ay...");
            alert("Your final score was " + currentGuess + " and you needed get " + randomNumber + ".");
            losses++;
            let playAgain = confirm("Did you want to play again?");
            if (playAgain == true) {
                alert("Click on a Pokemon and try to match the points.");
            } else {
                alert("Game Over!");
            }

            $("#score-area").text(0);
            updateScore();
            resetGame();
            randomNumGen();

        }
    }


    $(".pikachu").on("click", function (event) {
        $(this).effect("shake");
        console.log(pikachuPoint);
        currentGuess += pikachuPoint;
        updateCurrentGuess();
        winOrLose();

    });

    $(".snorlax").on("click", function (event) {
        $(this).effect("shake");
        console.log(snorlaxPoint);
        currentGuess += snorlaxPoint;
        updateCurrentGuess();
        winOrLose();

    });

    $(".psyduck").on("click", function (event) {
        $(this).effect("shake");
        console.log(psyduckPoint);
        currentGuess += psyduckPoint;
        updateCurrentGuess();
        winOrLose();

    });

    $(".jigglypuff").on("click", function (event) {
        $(this).effect("shake");
        console.log(jigglypuffPoint);
        currentGuess += jigglypuffPoint;
        updateCurrentGuess();
        winOrLose();


    });



});


