// Project: Rock Paper Scissors

// getComputerChoice

function getComputerChoice() {
    // 1. Store choices in an array
    const choices = ['Rock', 'Paper', 'Scissors'];
    // 2. Get a random index
    const randomIndex = Math.floor(Math.random() * choices.length);
    // 3. Return corresponding choice
    return choices[randomIndex];
}

// console.log(getComputerChoice());

// playRound

function playRound(playerSelection, computerSelection) {
    const results = {
        rock: 'Rock beats scissors.',
        paper: 'Paper beats rock.',
        scissors: 'Scissors beat paper.'
    };
    
    const playerSelectionLC = playerSelection.toLowerCase();
    const computerSelectionLC = computerSelection.toLowerCase();
    
    // 1. Compare both selections (lower case)
    if (computerSelectionLC === playerSelectionLC) {
        return 'Tie!';
    } else {
        // My state playerWins will only change if playerSelection beats computerSelection
        let playerWins = false;
        switch (computerSelectionLC) {
            case 'rock':
                if (playerSelectionLC === 'paper') {
                    playerWins = true;
                }
                break;
            case 'paper':
                if (playerSelectionLC === 'scissors') {
                    playerWins = true;
                }
                break;
            case 'scissors':
                if (playerSelectionLC === 'rock') {
                    playerWins = true;
                }
                break;
            default:
                return 'Invalid option.'
        }
        // 2. Return string indicating result
        if (playerWins) {
            return 'You win! ' + results[playerSelectionLC];
        } else {
            return 'You lose! ' + results[computerSelectionLC];
        }
    }
}

// test
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log('computerSelection:', computerSelection);
console.log(playRound(playerSelection, computerSelection));