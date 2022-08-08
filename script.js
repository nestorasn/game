function computerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}

const choice = ['Rock', 'Scissors', 'Paper'];
// const playerSelection = prompt('Rock, Scissors, or Paper?','');
// const computerSelection = computerChoice(choice);
let computerScore = 0;
let playerScore = 0;

//alert(`You use: ${playerSelection}! Computer uses: ${computerSelection}!`);

function oneRound() {
    const playerSelection = prompt('Rock, Scissors, or Paper?','');
    const computerSelection = computerChoice(choice);
    alert(`You use: ${playerSelection}! Computer uses: ${computerSelection}!`);
    if (playerSelection.toUpperCase() === 'Rock'.toUpperCase()){
    if (computerSelection === 'Scissors') {
        alert('YOU WIN!')
        return playerScore += 1
    } else if (computerSelection === 'Rock') {
        alert('TIE GAME!')
    } else if (computerSelection === 'Paper') {
        alert('YOU LOSE!')
        return computerScore += 1
    }
} 

if (playerSelection.toUpperCase() === 'Paper'.toUpperCase()){
    if (computerSelection === 'Rock') {
        alert('YOU WIN!')
        return playerScore += 1
    } else if (computerSelection === 'Paper') {
        alert('TIE GAME!')
    } else if (computerSelection === 'Scissors') {
        alert('YOU LOSE!')
        return computerScore += 1
    }
} 
if (playerSelection.toUpperCase() === 'Scissors'.toUpperCase()){
    if (computerSelection === 'Paper') {
        alert('YOU WIN!')
        return playerScore += 1
    } else if (computerSelection === 'Scissors') {
        alert('TIE GAME!')
    } else if (computerSelection === 'Rock') {
        alert('YOU LOSE!')
        return computerScore += 1
    }
} else {
    alert(`${playerSelection} is unable to interact with ${computerSelection}. Please choose rock, scissors, or paper.`)
}
}

function game(){
    
for (let i = 0; i < 5; i++) {

oneRound();
}
}
game();

alert(`Player Score: ${playerScore} : Computer Score: ${computerScore}`)

if (playerScore > computerScore) {
    alert('YOU ARE THE CHAMPION!!')
} else if (playerScore < computerScore) {
    alert('YOU HAVE BEEN DEFEATED!!')
} else {
    alert("IT'S A DRAW!!")
}
  



