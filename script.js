// Project: Rock Paper Scissors

// getComputerChoice

function getComputerChoice() {
    // 1. Store choices in an array
    const choices = ['rock', 'paper', 'scissors'];
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
    
    // 1. Compare both selections (lower case)
    if (computerSelection === playerSelectionLC) {
        console.log('Tie!');
        return 'tie';
    } else {
        // My 'state' playerWins will only change if player beats computer
        let playerWins = false;
        switch (playerSelectionLC) {
            case 'rock':
                if (computerSelection === 'scissors') {
                    playerWins = true;
                }
                break;
            case 'paper':
                if (computerSelection === 'rock') {
                    playerWins = true;
                }
                break;
            case 'scissors':
                if (computerSelection === 'paper') {
                    playerWins = true;
                }
                break;
            default:
                // Invalid choice ends round
                console.log('Invalid choice. You lose!');
                return 'computerCounter';
        }
        // 2. Return results
        if (playerWins) {
            console.log('You win! ' + results[playerSelectionLC]);
            return 'playerCounter';
        } else {
            console.log('You lose! ' + results[computerSelection]);
            return 'computerCounter';
        }
    }
}

// test
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log('computerSelection:', computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// tiebreaker

/* function tiebreaker() {
    
} */


// game

function game() {
    // Counter for both players:
    let counter = {
        playerCounter: 0,
        computerCounter: 0,
        tie: 0
    };  
    // 1. Each round get a choice from user via prompt, call playRound, and update counters:
    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt(`Round ${i}: Rock, paper or scissors?`);
        const computerSelection = getComputerChoice();
        console.log(`Round ${i} playerSelection:`, playerSelection);
        console.log(`Round ${i} computerSelection:`, computerSelection);
        const result = playRound(playerSelection, computerSelection);
        // Outcomes in result match props in obj counter:
        counter[result] += 1;
    }
    // 2. Compare counters and display the winner:
    if (counter.playerCounter > counter.computerCounter) {
        return 'YOU WIN THE GAME!';
    } else if (counter.playerCounter < counter.computerCounter) {
        return 'YOU LOSE THE GAME!';
    } else {
        return 'TIE!'
    }
}

console.log(game());