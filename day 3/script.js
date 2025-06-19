let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You Win! ${userChoice} beats ${computerChoice}`;
    userScore++;
  } else {
    result = `You Lose! ${computerChoice} beats ${userChoice}`;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
}
