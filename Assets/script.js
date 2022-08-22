var startButton = document.querySelector('.btn-start');
var timeEl = document.querySelector('.tik-tok');
var quizz1 = document.querySelector('#quiz1');

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
 




// quizz1.style.visibility = 'hidden';