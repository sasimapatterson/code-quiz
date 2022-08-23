
var startButton = document.querySelector('.btn-start');
var timeEl = document.querySelector('.tik-tok');
var quizBox = document.querySelector('.quiz-box');
var quizz1 = document.querySelector('#quiz1');
var quizz2 = document.querySelector('#quiz2');
var quizz3 = document.querySelector('#quiz3');
var buttons = document.querySelectorAll('.choice');
var intro = document.querySelector('.intro');
var position = 1;

// To countdown the time 
var timeLeft = function() {
    var timeRemain = 75;

    var timeInterval = setInterval(function() {
        timeRemain--;
        timeEl.textContent = timeRemain;

        if(timeRemain === 0) {
            clearInterval(timeInterval);
            console.log()
        }
    }, 1000);
    
};

// Once the start button is clicked the time will start counting down
startButton.addEventListener('click', function(){
    timeLeft();
    setState("quizBox");
});


// var questionOne = [
//     {   title: "Question1",
//         choices : ['Andrew', 'Sasima', 'Keith', 'Tara'],
//         answer: 'Sasima'
//     }
// ]
var setState = function (state){

    intro.style.display = 'none';
    quizBox.style.display = 'none';

    if(state === "intro"){
        intro.style.display = 'block';
    }
    if(state === "quizBox"){
        quizBox.style.display = 'block';
    }
}

// console.log(answer);
// quizz1.style.display = 'none';
quizz2.style.display = 'none';
quizz3.style.display = 'none';
var displayNextQuestion = function (parentNode){
    position++;
    parentNode.style.display = 'none';
    var nextQuestionEl = document.querySelector('#quiz' + position);
    nextQuestionEl.style.display = null;
}
document.addEventListener('click', function(event){
    // var answer = buttons.textContent;
    if(event.target.matches('.choice')){
        var element = event.target;
        var parent = element.parentNode;
        console.log(element.textContent);
        if(element.textContent === parent.dataset.answer){
            console.log('correct');
        }
        displayNextQuestion(parent);
    }
    // if(answer === this.choices[1]) {
    //     quizz1.textContent = 'Correct';
    //     quizz1.style.display = 'none';
    //     quizz2.style.display = 'block';
    // } else {
    //     quizz1.textContent = 'Wrong';
    //     quizz1.style.display = 'none';
    //     quizz2.style.display = 'block';
    // }
    // 
});
setState("intro");