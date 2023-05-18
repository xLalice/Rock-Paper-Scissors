function getComputerChoice(){
    const choices = ["Rock", "Scissors", "Papers"];
    return choices[Math.floor(Math.random()* 3)];
} 

function startRound(player, computer){
    let playerSelection = player.toLowerCase();
    let computerSelection= computer.toLowerCase();
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === playerSelection){
        return "Draw"
    } else {
        return "You lose"
    }
}



function game(){
    //Record the scores of the player and the computer
    let playerScore = 0;
    let computerScore = 0;

    //If either one reach 5, the game is over, until then keep playing
    while (playerScore != 5 && computerScore != 5) {
        let playerChoice = prompt("Enter your weapon");
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        let result = startRound(playerChoice, computerChoice);
        console.log(result);
        if (result.includes("win")) {
            playerScore += 1;
        } else if (result.includes("lose")) {
            computerScore+= 1;
        }
        console.log(`You: ${playerScore}   Computer: ${computerScore}`)
    }
}

game();
