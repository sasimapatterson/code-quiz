var startButton = document.querySelector('.btn-start');
var timeEl = document.querySelector('.tik-tok');

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
    
}
// var clickStart = function() {
    
//     })
// };

startButton.addEventListener('click', timeLeft);
    
    