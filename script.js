var startBtn = document.getElementById("submit");
var timer = document.getElementById("timer");
var startTime = 300; 

startBtn.addEventListener('click', function(event){
    event.preventDefault();

var quizInterval = setInterval( function(){
timer.textContent = startTime;
startTime --;
Quiz();

if (startTime === 0){
    clearInterval(quizInterval);
    reportScore();
}
},1000)

})
function Quiz() {
    startBtn.remove();
    
    console.log("quiz");
}
function reportScore(){

    console.log("score")
}