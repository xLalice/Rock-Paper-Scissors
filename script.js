let playerScore = 0;
let computerScore = 0;
const bestOf = 5;
const playerScoreCont = document.getElementById("player-score");
const comScoreCont = document.getElementById("computer-score");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");


function getComputerChoice(){
    const choices = ["Rock", "Scissors", "Paper"];
    return choices[Math.floor(Math.random()* 3)];
} 



function startRound(playerSelection){
    let computerSelection= getComputerChoice();
    const computerChoice = document.getElementById(computerSelection);

    ~
    if (playerScore >= bestOf || computerScore >= bestOf){
        playerScore = 0;
        computerScore = 0;
        playerScoreCont.textContent = playerScore;
        comScoreCont.textContent = computerScore;
        return;
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        result.textContent =  `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        playerScoreCont.textContent = playerScore;
    } else if (computerSelection === playerSelection){
        result.textContent = "Draw";
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        comScoreCont.textContent = computerScore;
    }
}


    

// Event listener setup
function setupEventListeners() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            startRound(button.id);
        });
    });
}

// Call the function to set up event listeners
setupEventListeners();

