
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
var savedScores = document.querySelector('#saved-scores')
var submitBtn = document.querySelector('.submit');
var savedResult = document.querySelector('.saved-result');
var goBackBtn = document.querySelector('.back');
var position = 1;
var timeInterval;
var timeRemain = 45;
var score = 0;
var point = localStorage.getItem("point");

scoreCount.textContent = point;


// To countdown the time 
var timeLeft = function () {
   
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
    savedScores.style.display = 'none';

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

// To add score if answers correctly or subtract times if answers incorrectly
document.addEventListener('click', function (event) {

    if (event.target.matches('.choice')) {
        var element = event.target;
        var parent = element.parentNode;
        // console.log(element.textContent);
        if (element.textContent === parent.dataset.answer) {
            score++
            scoreCount.innerHTML = ` ${score}`;    
        } 
        if (element.textContent !== parent.dataset.answer){
            timeRemain-= 10;
        }
        if (parent.dataset.answer === "c.quotes") {
            endQuiz();
        } else {
            displayNextQuestion(parent);
        }
    }
});

//Store initial and score in local storage
submitBtn.addEventListener('click', function () {
    
    var initialName = document.querySelector('.initial').value;
    var highScores = { score, initialName };
    localStorage.setItem('HIGH_SCORE', JSON.stringify(highScores));
    JSON.parse(localStorage.getItem('HIGH_SCORE'));
        endPage.style.display = 'none';
        // savedScores.style.display = '';
        var data = JSON.parse(localStorage.getItem('HIGH_SCORE'))
        showScores(data);
})

//Displays score from local storage
function showScores(data) {
    savedScores.style.display = '';

    var lis = document.createElement('li');
    lis.style.listStyle = 'none';
    lis.style.fontSize = "20px";
    lis.innerHTML = data.initialName  +  " - "  +  "  " + data.score;
    savedResult.appendChild(lis);
}

// Back to the first page (intro)
goBackBtn.addEventListener('click', function(){
    setState('intro');
})

// To stop the timer when last quiz was clicked
var endQuiz = function () {
    clearInterval(timeInterval);
    setState("end");
}

setState("intro");