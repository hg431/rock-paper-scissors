 // Sets everyone's score to 0
 
    let computerScore = 0;
    let playerScore = 0;

// Resets scores

function startAgain() {
    computerScore = 0;
    playerScore = 0;
    const container = document.querySelector('#results');
    container.textContent = '';
}

// Function to get the computer's random selection for the round

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice == 0) {
            return "rock";
        } else if (computerChoice == 1) {
            return "paper";
        } else if (computerChoice == 2) {
            return "scissors";
        } else {
            return "error";
        }
        }

// Play an individual round

    function playRound(playerSelection, computerSelection) {
        if (computerScore < 5 && playerScore < 5) {
            if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
                addOneToScore("player");
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "It's a draw on this round! rock and rock. Score so far: Player - " 
                                        + playerScore + ", Computer - " 
                                        + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
                addOneToScore("player");
                const content = document.createElement('p');
                content.textContent = "You win this round! rock beats paper. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "You lose this round! scissors beat rock. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "You lose this round! rock beats paper. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
                addOneToScore("player");
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "It's a draw on this round! paper and paper. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
                addOneToScore("player");
                const content = document.createElement('p');
                content.textContent = "You win this round! paper beats scissors. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
                addOneToScore("player");
                const content = document.createElement('p');
                content.textContent = "You win this round! scissors beats rock. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "You lose this round! paper beats scissors. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
                addOneToScore("player");
                addOneToScore("computer");
                const content = document.createElement('p');
                content.textContent = "This round's a draw! scissors and scissors. Score so far: Player - " 
                + playerScore + ", Computer - " 
                + computerScore;
                container.appendChild(content);
                endGame();
            } else { 
                const content = document.createElement('p');
                content.textContent = "Error.";
                container.appendChild(content);
            }
        }

    }

// The overall game which plays five rounds and declares the winner

const container = document.querySelector('#results');

const rockElement = document.getElementById("rock-image");
rockElement.addEventListener("click", function() {
    playRound("rock",getComputerChoice())
});

const paperElement = document.getElementById("paper-image");
paperElement.addEventListener("click", function() {
    playRound("paper",getComputerChoice())
});

const scissorsElement = document.getElementById("scissors-image");
scissorsElement.addEventListener("click", function() {
    playRound("scissors",getComputerChoice())
});



// Checks if anyone has got to a score of 5 yet

function endGame() {
    if (computerScore >= 5 || playerScore >= 5) {
        if (playerScore > computerScore) {
            const container = document.querySelector('#results');
            const content = document.createElement('p');
            content.textContent = "Game over. You win!";
            container.appendChild(content);
        } else if (playerScore == computerScore) {
            const container = document.querySelector('#results');
            const content = document.createElement('p');
            content.textContent = "Game over. Draw!";
            container.appendChild(content);
        } else if (playerScore < computerScore) {
            const container = document.querySelector('#results');
            const content = document.createElement('p');
            content.textContent = "Game over. You lose!";
            container.appendChild(content);
        }
    }
}

// Adds one to the computer or the player score, depending on who won

    function addOneToScore(whoIsPlaying) {
        if (whoIsPlaying == "computer") {
            computerScore++;
        } else if (whoIsPlaying == "player") {
            playerScore++;
        }
    }