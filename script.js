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

// playRound

function playRound(event) {
    // event.stopPropagation();
    const results = {
        rock: 'Rock beats scissors.',
        paper: 'Paper beats rock.',
        scissors: 'Scissors beat paper.'
    };

    const playerSelection = event.target.id;
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    // 1. Compare both selections
    if (computerSelection === playerSelection) {
        console.log('Tie!');
        roundDivider();
        return 'tie';
    } else {
        // My 'state' playerWins will only change if player beats computer
        let playerWins = false;
        switch (playerSelection) {
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
        }
        // 2. Return results
        if (playerWins) {
            console.log('You win! ' + results[playerSelection]);
            roundDivider();
            return 'playerCounter';
        } else {
            console.log('You lose! ' + results[computerSelection]);
            roundDivider();
            return 'computerCounter';
        }
    }
}

// game

// function game() {
//     // Counter for both players:
//     let counter = {
//         playerCounter: 0,
//         computerCounter: 0,
//         tie: 0
//     };  
//     console.log(`||| ROCK \u{270A} PAPER \u{270B} SCISSORS \u{270C} |||`);
//     // 1. Each round get a choice from user via prompt, call playRound, and update counters:
//     for (let i = 1; i < 6; i++) {
//         const playerSelection = prompt(`Round ${i}: Rock, paper or scissors?`);
//         const computerSelection = getComputerChoice();
//         console.log(`Round ${i} playerSelection:`, playerSelection);
//         console.log(`Round ${i} computerSelection:`, computerSelection);
//         const result = playRound(playerSelection, computerSelection);
//         // Outcomes in result match props in obj counter:
//         counter[result] += 1;
//     }
//     // 2. Display final score:
//     console.log(`-- FINAL SCORE: PLAYER ${counter.playerCounter} - COMPUTER ${counter.computerCounter}`);
    
//     // 2. Compare counters and display the winner:
//     // tiebreaker (returns either 0 or 1) to add 1 more ocurrence randomly
//     if (counter.playerCounter === counter.computerCounter) {
//         console.log('-- TIE! Winner will be decided randomly.');
//         if(tiebreaker()) {
//             counter.playerCounter += 1;
//         } else {
//             counter.computerCounter += 1;
//         }
//     }
//     // Winner:
//     if (counter.playerCounter > counter.computerCounter) {
//         return '** YOU WIN THE GAME! **';
//     } else {
//         return '** YOU LOSE THE GAME! **';
//     }
// }

// console.log(game());

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

// Event listeners

const choices = document.querySelectorAll('.choice > img');
choices.forEach(choice => choice.addEventListener('click', playRound));