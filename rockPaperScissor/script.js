let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let playerSelection;
let computerSelection;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
})

paper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
})

scissor.addEventListener("click", () => {
    playerSelection = "scissor";
    playRound();
})

const playRound = () => {
    computerPlay();

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            tieCount++;
            document.getElementById("statusUpdate").innerHTML = "Tie game!";
        } else if (computerSelection == "paper") {
            computerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You lose. Paper beats rock!";
        } else {
            playerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You win. Rock beats scissor";
        }
    }

    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            playerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You win. Paper beats rock!";
        } else if (computerSelection == "paper") {
            tieCount++;
            document.getElementById("statusUpdate").innerHTML = "Tie game";
        } else {
            computerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You lose. Scissor beats paper!";
        }
    }

    if (playerSelection.toLowerCase() == "scissor") {
        if (computerSelection == "rock") {
            computerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You lose. Rock beats scissor!";
        } else if (computerSelection == "paper") {
            playerWinCount++;
            document.getElementById("statusUpdate").innerHTML = "You win. Scissor beats paper!";
        } else {
            tieCount++;
            document.getElementById("statusUpdate").innerHTML = "Tie game";
        }
    }
    document.getElementById("playerScore").innerHTML = playerWinCount;
    document.getElementById("computerScore").innerHTML = computerWinCount;
}

const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissor";
            break;
    }
    return computerSelection;
}

// if (playerWinCount == 5 || computerWinCount == 5) {
// 	if (playerWinCount == 5) {
// 		document.getElementById("statusUpdate").innerHTML = "You win! Well done!"
// 	} else {
// 		document.getElementById("statusUpdate").innerHTML = "You lose! Try again!"
// 	}
// }