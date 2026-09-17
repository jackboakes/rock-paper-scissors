function getComputerChoice() {
    let result = "failed computer choice";
    let numChoice = Math.ceil(Math.random() * 3);
    switch(numChoice)
    {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
    }
    return result;
}

function getHumanChoice() {
    return window.prompt("Enter rock, paper, or scissors:");
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    let result = "failed play round";

    humanWin = false;

    if(humanChoice === computerChoice)
    {
        result = "It's a draw!";
        return;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors")
    {
        humanWin = true;
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        humanWin = true;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        humanWin = true;
    }

    if(humanWin)
    {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1);
        result = `You Win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else
    {
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
        result = `You Lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    console.log(result);
}

function playGame()
{
    while(1)
    {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection, humanScore, computerScore);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    }
}

playGame();
