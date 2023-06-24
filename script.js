// Project: Rock Paper Scissors

// Choices buttons

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playRound));

// getComputerChoice

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Results

const counter = {
    player: 0,
    computer: 0,
    rounds: 0
};  

// playRound

function playRound(event) {
    const results = {
        rock: 'Rock beats scissors.',
        paper: 'Paper beats rock.',
        scissors: 'Scissors beat paper.'
    };

    // Count and display round #
    counter.rounds += 1;
    const round = document.querySelector('.round');
    round.textContent = `Round ${counter.rounds}`;

    // Selections
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    
    // Display selections
    const playerSelectionElement = document.querySelector('.playerSelection');
    playerSelectionElement.textContent = `Player: ${playerSelection}`;
    const computerSelectionElement = document.querySelector('.computerSelection');
    computerSelectionElement.textContent = `Computer: ${computerSelection}`;
    
    // Round results, score, and winner DOM elements
    const result = document.querySelector('.result');
    const score = document.querySelector('.score');
    const winner = document.querySelector('.winner');

    // 1. Compare both selections
    if (computerSelection === playerSelection) result.textContent = 'Tie!';
    else {
        // My 'state' playerWins will only change if player beats computer
        let playerWins = false;
        switch (playerSelection) {
            case 'rock':
                if (computerSelection === 'scissors') playerWins = true;
                break;
            case 'paper':
                if (computerSelection === 'rock') playerWins = true;
                break;
            case 'scissors':
                if (computerSelection === 'paper') playerWins = true;
        }
        // 2. Show round results
        if (playerWins) {
            result.textContent = `You win! ${results[playerSelection]}`;
            counter.player += 1;
        } else {
            result.textContent = `You lose! ${results[computerSelection]}`;
            counter.computer += 1;
        }
    }
    // 3. Display score
    score.textContent = `PLAYER ${counter.player} - COMPUTER ${counter.computer}`;
    // 4. Check if there's a winner
    if (counter.player === 5 || counter.computer === 5) {
        if (counter.player > counter.computer) winner.textContent = 'YOU WIN THE GAME!';
        else winner.textContent = 'YOU LOSE THE GAME!';
        // Disable choices buttons
        choices.forEach(choice => choice.removeEventListener('click', playRound));
    }
}

// Reset button

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => document.location.reload());

