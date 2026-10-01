import { computerScienceQuiz as allQuiz } from "./components/questions.js";

const startQuiz = document.querySelector("#start-btn");
const welcomeText = document.querySelector(".start-screen");
const quizContainer = document.querySelector(".question-screen");
const quizBody = document.querySelector(".quiz-body");
const nextButton = document.querySelector("#next-btn");
const resultScreen = document.querySelector(".results-screen");
const restart = document.querySelector("#restart-btn");
const score = document.querySelector("#final-score");
const calculatePercentage = document.querySelector(".percentage-circle");
const display = document.querySelector("#time-left");
const progressBar = document.querySelector("#progress-bar-fill");

let buttonClicked = 0;
let totalScore = 0;
let currentWidth = 0;

function quizGenerator(buttonClicked) {
  const currentQuiz = allQuiz[buttonClicked];
  nextButton.style.display = "none";

  quizBody.innerHTML = `
<h2 id="question-text">${currentQuiz.question}</h2>
    <div class="options-container">
        <!-- Hint for JS: Use classes like 'correct' or 'incorrect' to style selected answers -->
        <button class="option-btn">${currentQuiz.options[0]}</button>
        <button class="option-btn ">${currentQuiz.options[1]}
        </button>
        <button class="option-btn ">${currentQuiz.options[2]}
         </button>
        <button class="option-btn">${currentQuiz.options[3]}
        </button>
    </div>
`;
}
function progressIncrease() {
  console.log(currentWidth);
  progressBar.style.width = currentWidth + "%";
  currentWidth += 10;
  console.log("second ", currentWidth);
}
startQuiz.addEventListener("click", () => {
  if (welcomeText.classList.contains("active")) {
    welcomeText.classList.remove("active");
    welcomeText.classList.add("hide");
    quizContainer.classList.add("active");
  }
  quizGenerator(buttonClicked);
  buttonClicked++;
  toggleTimer();
  currentWidth = 10;
  progressBar.style.width = currentWidth + "%";
});

nextButton.addEventListener("click", (event) => {
  if (buttonClicked < allQuiz.length) {
    quizGenerator(buttonClicked);
    buttonClicked++;
    progressIncrease();
  } else if (buttonClicked === allQuiz.length) {
    quizContainer.classList.remove("active");
    resultScreen.classList.add("active");
    score.textContent = totalScore;
    calculatePercentage.textContent = `${(totalScore * 100) / 10}%`;
  }
});

restart.addEventListener("click", () => {
  {
    resultScreen.classList.remove("active");
    welcomeText.classList.add("active");
    buttonClicked = 0;
    resetTimer();
  }
});

quizBody.addEventListener("click", (event) => {
  const selectedAnswer = event.target.textContent.trim();
  const correctAnswer = allQuiz[buttonClicked - 1].answer.trim();
  const block = event.target;

  if (selectedAnswer === correctAnswer) {
    block.classList.add("correct");
    totalScore++;
  } else {
    block.classList.add("incorrect");
    const buttons = quizBody.querySelectorAll(".option-btn");
    buttons.forEach((btn) => {
      if (btn.textContent.trim() === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }
  const allButtons = quizBody.querySelectorAll(".option-btn");
  allButtons.forEach((btn) => (btn.disabled = true));

  nextButton.style.display = "block";
});

const INITIAL_TIME = 5 * 60;
let timeLeft = INITIAL_TIME;
let timerId = null;

// Formats seconds into MM:SS display format
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
// Handles the countdown interval logic
function tick() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    clearInterval(timerId);
    timerId = null;
    quizContainer.classList.remove("active");
    resultScreen.classList.add("active");
    score.textContent = totalScore;
    calculatePercentage.textContent = `${(totalScore * 100) / 10}%`;
    alert("Time is up!");
  }
}
// Starts or pauses the countdown
function toggleTimer() {
  if (timerId === null) {
    // Start the timer
    timerId = setInterval(tick, 1000);
  } else {
    // Pause the timer
    clearInterval(timerId);
    timerId = null;
  }
}
// Resets timer back to the default state
function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = INITIAL_TIME;
  updateDisplay();
}

updateDisplay();
