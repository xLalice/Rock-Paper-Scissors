function getComputerChoice(){
    const choices = ["Rock", "Scissors", "Papers"];
    return choices[Math.floor(Math.random()* 3)];
} 

function startRound(player, computer){
    let playerChoice = player.toLowerCase();
    let computerChoice = computer.toLowerCase();
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win! ${playerChoice} beats ${computerChoice}";
    } else if (computerChoice === playerChoice){
        return "Draw"
    } else {
        return "You lose"
    }
}
