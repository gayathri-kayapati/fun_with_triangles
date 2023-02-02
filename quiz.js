var quizForm = document.querySelector(".quiz-form");
var showCorrectAnswer = document.querySelectorAll(".show-correctAns");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");
var correctAnswers = [
  "Scalene",
  "2",
  "180°",
  "Hypotenuse",
  "a+b+c",
  "5cm,8cm,15cm",
  "Acute",
  "The circumcenter",
  "½ × base × height",
  "Trigonometry",
];

function countScore() {
  var score = 0;
  var index = 0;
  var formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    } else {
      wrongAnswer(index);
    }
    index++;
  }
  output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", countScore);

function wrongAnswer(index) {
  showCorrectAnswer[index].style.display = "block";
  showCorrectAnswer[index].innerText =
    "Correct answer: " + correctAnswers[index];
}
