const choice = ['Rock', 'Scissors', 'Paper'];

function computerChoice(choice){
  
return choice[Math.floor(Math.random()*choice.length)];
     
}

console.log(computerChoice(choice));

