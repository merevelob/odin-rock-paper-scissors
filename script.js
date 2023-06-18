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
        roundDivider();
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
                roundDivider();
                return 'computerCounter';
        }
        // 2. Return results
        if (playerWins) {
            console.log('You win! ' + results[playerSelectionLC]);
            roundDivider();
            return 'playerCounter';
        } else {
            console.log('You lose! ' + results[computerSelection]);
            roundDivider();
            return 'computerCounter';
        }
    }
}

// test
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log('computerSelection:', computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// game

function game() {
    // Counter for both players:
    let counter = {
        playerCounter: 0,
        computerCounter: 0,
        tie: 0
    };  
    console.log(`||| ROCK \u{270A} PAPER \u{270B} SCISSORS \u{270C} |||`);
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
    // 2. Display final score:
    console.log(`-- FINAL SCORE: PLAYER ${counter.playerCounter} - COMPUTER ${counter.computerCounter}`);
    
    // 2. Compare counters and display the winner:
    // tiebreaker (returns either 0 or 1) to add 1 more ocurrence randomly
    if (counter.playerCounter === counter.computerCounter) {
        console.log('-- TIE! Winner will be decided randomly.');
        if(tiebreaker()) {
            counter.playerCounter += 1;
        } else {
            counter.computerCounter += 1;
        }
    }
    // Winner:
    if (counter.playerCounter > counter.computerCounter) {
        return '** YOU WIN THE GAME! **';
    } else {
        return '** YOU LOSE THE GAME! **';
    }
}

console.log(game());

// HELPER FUNCTIONS:

// Divider to use after each round:
function roundDivider() {
    console.log('--------------------');
}

// Tiebreaker:
function tiebreaker() {
    // Returns either 0 or 1
    return Math.floor(Math.random() * 2);
}