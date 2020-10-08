const game = () => {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;

    while (playerWinCount < 5 && computerWinCount < 5) {
        let playerSelection = prompt("Rock, paper, or scissor?");
        console.log(`playerChoice is ${playerSelection}`);
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    function playRound(playerSelection, computerSelection) {
        // Play round
        if (playerSelection.toLowerCase() == "rock") {
            if (computerSelection == "rock") {
                tieCount++;
                return "Tie game";
            } else if (computerSelection == "paper") {
                computerWinCount++;
                return "You lose. Paper beats rock!";
            } else {
                playerWinCount++;
                return "You win. Rock beats scissor";
            }
        }

        if (playerSelection.toLowerCase() == "paper") {
            if (computerSelection == "rock") {
                playerWinCount++;
                return "You win. Paper beats rock!";
            } else if (computerSelection == "paper") {
                tieCount++;
                return "Tie game";
            } else {
                computerWinCount++;
                return "You lose. Scissor beats paper!";
            }
        }

        if (playerSelection.toLowerCase() == "scissor") {
            if (computerSelection == "rock") {
                computerWinCount++;
                return "You lose. Rock beats scissor!";
            } else if (computerSelection == "paper") {
                playerWinCount++;
                return "You win. Scissor beats paper!";
            } else {
                tieCount++;
                return "Tie game";
            }
        }
    }

    function computerPlay() {
        let computerChoice = "";
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        switch (randomNumber) {
            case 1:
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break;
            case 3:
                computerChoice = "scissor";
                break;
        }

        console.log(`computerChoice is ${computerChoice}`);
        return computerChoice;
    }
    console.log(`Game over! You won ${playerWinCount} times and computer won ${computerWinCount} times. You tied ${tieCount} times.`);
}
    
game();