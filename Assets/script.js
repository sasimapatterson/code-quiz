
var startButton = document.querySelector('.btn-start');
var timeEl = document.querySelector('.tik-tok');
var quizBox = document.querySelector('.quiz-box');
var quizz1 = document.querySelector('#quiz1');
var quizz2 = document.querySelector('#quiz2');
var quizz3 = document.querySelector('#quiz3');
var quizz4 = document.querySelector('#quiz4');
var buttons = document.querySelectorAll('.choice');
var intro = document.querySelector('.intro');
var endPage = document.querySelector('#end');
var scoreCount = document.querySelector('#scoreBox');
var position = 1;
var timeInterval;

var score = 0;
var point = localStorage.getItem("point");

scoreCount.textContent = point;


// To countdown the time 
var timeLeft = function () {
    var timeRemain = 60;

    timeInterval = setInterval(function () {
        timeRemain--;
        timeEl.textContent = timeRemain;

        if (timeRemain === 0) {
            clearInterval(timeInterval);
            console.log()
        }
    }, 1000);

};

// Once the start button is clicked the time will start counting down and the quiz1 will display
startButton.addEventListener('click', function () {
    timeLeft();
    setState("quizBox");
});

// To display the intro and questions one at a time
var setState = function (state) {

    intro.style.display = 'none';
    quizBox.style.display = 'none';
    endPage.style.display = 'none';

    if (state === "intro") {
        intro.style.display = '';
    }
    if (state === "quizBox") {
        quizBox.style.display = '';
    }
    if (state === "end") {
        endPage.style.display = '';
    }
}

// To hide all the quizzes except quiz1
// quizz1.style.display = 'none';
quizz2.style.display = 'none';
quizz3.style.display = 'none';
quizz4.style.display = 'none';

// To display the next set of question one at a time
var displayNextQuestion = function (parentNode) {
    position++;
    parentNode.style.display = 'none';
    var nextQuestionEl = document.querySelector('#quiz' + position);
    nextQuestionEl.style.display = null;
}

document.addEventListener('click', function (event) {
    // var answer = buttons.textContent;
    if (event.target.matches('.choice')) {
        var element = event.target;
        var parent = element.parentNode;
        console.log(element.textContent);
        if (element.textContent === parent.dataset.answer) {
            score++;
        }
        if (parent.dataset.answer === "c.quotes") {
            endQuiz();
        } else {
            displayNextQuestion(parent);
        }

    }
});

// To stop the timer when last quiz was clicked
var endQuiz = function(){
    clearInterval(timeInterval);
    setState("end");
}

setState("intro");