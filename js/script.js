// questions and answers
const questions = document.querySelectorAll(".question");
const questionBoxes = document.querySelectorAll(".question-box");
const answers = document.querySelectorAll(".answer");
const answerTexts = document.querySelectorAll(".answer__text");
// event listenetrs
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", check(i));
}
function calcAnswerHeight(par) {
  let d = par;
  let questionHeight = window.getComputedStyle(questions[d]).height;
  let answerHeight = window.getComputedStyle(answers[d]).height;
  let answerPaddingTop = window.getComputedStyle(answers[d]).paddingTop;
  let answerPaddingBottom = window.getComputedStyle(answers[d]).paddingBottom;
  questionBoxes[d].style.height = `calc(${questionHeight} + ${answerHeight})`;
}
//questions and answers logic
(function (a) {
  // open first answer when page is loaded'
  for(i = 0; i < questionBoxes.length; i++) {
    questionBoxes[i].classList.add("closed");
  }
  questionBoxes[a].classList.remove("closed");
  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  // // calculating height
  calcAnswerHeight(a);
})(0);
//returns elements to their's default values
function defaultState() {
  for (i = 0; i < questions.length; i++) {
    questionBoxes[i].classList.add("closed");
    questionBoxes[i].classList.remove("open");
    let questionHeight = window.getComputedStyle(questions[i]).height;
    questionBoxes[i].style.height = `${questionHeight}`;
    questions[i].classList.remove("open");
    questionBoxes[i].classList.remove("open");
  }
}
function fn(a) {
  defaultState();
  questionBoxes[a].classList.remove("closed");
  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  calcAnswerHeight(a);
}
// check if the answer is closed or opened
function check(b) {
  questions[b].addEventListener("click", function () {
    if (questionBoxes[b].classList.contains("closed")) {
      fn(b);
    } else {
      defaultState();
    }
  });
}