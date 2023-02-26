    let computerScore = 0;
    let playerScore = 0;

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

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
            addOneToScore("player");
            addOneToScore("computer");
            return "Draw! rock and rock."
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
            addOneToScore("player");
            return "You win! rock beats paper."
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            addOneToScore("computer");
            return "You lose! scissors beat rock."       
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            addOneToScore("computer");
            return "You lose! rock beats paper."
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
            addOneToScore("player");
            addOneToScore("computer");
            return "Draw! paper and paper."
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
            addOneToScore("player");
            return "You win! paper beats scissors."
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
            addOneToScore("player");
            return "You win! scissors beats rock."
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            addOneToScore("computer");
            return "You lose! paper beats scissors."
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
            addOneToScore("player");
            addOneToScore("computer");
            return "Draw! scissors and scissors."
        } else { 
            return "Error"
        }
    }

    function game() {
        for (let i = 0; i < 5; i++) {
            console.log("This is round " + (i + 1));
            const playerSelection = prompt("Rock, paper or scissors?");
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            console.log("Score for this round: Player - " + playerScore + ", Computer - " + computerScore);
        }
        console.log("You've had five rounds, that's game over.");
        if (playerScore > computerScore) {
            console.log("You win!");
        } else if (playerScore == computerScore) {
            console.log("Draw!");
        } else if (playerScore < computerScore) {
            console.log("You lose!");
        }
    }

    function addOneToScore(whoIsPlaying) {
        if (whoIsPlaying == "computer") {
            computerScore++;
        } else if (whoIsPlaying == "player") {
            playerScore++;
        }
    }


    for (let i = 0; i <= 10; i += 2) {
	alert(i);
}
