let score = 0;
let timeLeft = 10;
let timerId;
const clickButton = document.getElementById("click-button");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startGameButton = document.getElementById("start-game");

clickButton.disabled = true;

clickButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

startGameButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  timeLeft = 10;
  clickButton.disabled = false;
  startGameButton.disabled = true;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  timeLeft--;
  timerDisplay.textContent = `Time: ${timeLeft}s`;

  if (timeLeft === 0) {
    clearInterval(timerId);
    clickButton.disabled = true;
    startGameButton.disabled = false;
    alert(`Game Over! Your final score is ${score}`);
  }
}
