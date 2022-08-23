var startButton = document.querySelector('.btn-start');
var timeEl = document.querySelector('.tik-tok');
var quizz1 = document.querySelector('#quiz1');
var quizz2 = document.querySelector('#quiz2');
var quizz3 = document.querySelector('#quiz3');

// To countdown the time 
var timeLeft = function() {
    var timeRemain = 10;

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
startButton.addEventListener('click', timeLeft);
 
var questionOne = ['Andrew', 'Sasima', 'Keith', 'Tara'];


if (answer === 'Sasima'){
    console.log("Congrats");
} else {
    console.log("try again");
}



// quizz1.style.display = 'none';
quizz2.style.display = 'none';
quizz3.style.display = 'none';