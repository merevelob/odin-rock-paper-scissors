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

// 