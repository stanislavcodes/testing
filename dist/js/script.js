// questions and answers
const questions = document.querySelectorAll(".question");
const questionBoxes = document.querySelectorAll(".question-box");
const answers = document.querySelectorAll(".answer");
const answerTexts = document.querySelectorAll(".answer__text");

// event listenetrs

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", check(i));
}
//

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
  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  answers[a].classList.add("open");
  // // calculating height
  calcAnswerHeight(a);
})(0);

//returns elements to their's default values
function defaultState() {
  for (i = 0; i < questions.length; i++) {
    answers[i].classList.add("closed");
    answers[i].classList.remove("open");

    let questionHeight = window.getComputedStyle(questions[i]).height;
    questionBoxes[i].style.height = `${questionHeight}`;
    console.log(questionHeight);

    questions[i].classList.remove("open");
    answers[i].classList.remove("open");
  }
}

function fn(a) {
  defaultState();
  answers[a].classList.remove("closed");

  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  answers[a].classList.add("open");
  // // calculating height
  calcAnswerHeight(a);
}
// check if the answer is closed or opened
function check(b) {
  questions[b].addEventListener("click", function () {
    if (answers[b].classList.contains("closed")) {
      fn(b);
    } else {
      defaultState();
    }
  });
}
