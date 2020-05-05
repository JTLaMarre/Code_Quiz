// dom vars
var startBtn = document.getElementById("submit");
var timer = document.getElementById("timer");
var ChoiceA = document.getElementById("ABtn")
var ChoiceB = document.getElementById("BBtn");
var ChoiceC = document.getElementById("CBtn");
var score = document.getElementById("score");
var DQ = document.getElementById("DQ");
var startMSG = document.getElementById("startMSG");
// Script vars index(currentquestion), score, quiz key
var Sc = 0
var questions = [
    {
        question: 'what is CSS for?!',
        ChoiceA: " A: creating actions",
        ChoiceB: "B: creating styling on a webpage",
        ChoiceC: "C: writing text elements.",
        correct: 'B'
    },
    {
        question: 'what is html for?',
        ChoiceA: "A: creating actions!",
        ChoiceB: "B creating styling on a webpage",
        ChoiceC: "C writing text elements.",
        correct: 'C'
    },
    {
        question: 'what is Javascript for?',
        ChoiceA: "creating actions",
        ChoiceB: "creating styling on a webpage",
        ChoiceC: "writing text elements.",
        correct: 'C'
    },
    {
        question: 'what is Javascript for..?',
        ChoiceA: "creating actions",
        ChoiceB: "creating styling on a webpage",
        ChoiceC: "writing text elements.",
        correct: 'C'
    },
    {
        question: 'what is Javascript for..?',
        ChoiceA: "creating actions",
        ChoiceB: "creating styling on a webpage",
        ChoiceC: "writing text elements.",
        correct: 'C'
    }



]
var questionIndex = questions.length - 1;

var currentquestion = 0
var startTime = 300;

var q = questions[currentquestion];
var Displayed_q = document.createElement('p');
Displayed_q.textContent = q.question;
DQ.appendChild(Displayed_q);
Displayed_q.style.display = "none";


startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    DisplayQuestion()
    var quizInterval = setInterval(function () {
        timer.textContent = startTime +"seconds";
        startTime--;


        if (startTime === 0) {
            clearInterval(quizInterval);
            reportScore();
        }
    }, 1000)

})
function Quiz(UserChoice) {

    if (UserChoice === q.correct) {
        Sc++;
        score.textContent = Sc + ":currentScore"
        currentquestion++;
        NextQuestion();
    }
    else {
        currentquestion++;
        NextQuestion();
    }

}
function DisplayQuestion() {
    startBtn.remove();
    startMSG.remove();
    Displayed_q.style.display = "inline"
    ABtn.textContent = q.ChoiceA;
    BBtn.textContent = q.ChoiceB;
    CBtn.textContent = q.ChoiceC;
}
function NextQuestion() {
    console.log(currentquestion);
    q=questions[currentquestion];
    Displayed_q.textContent = q.question;
    ABtn.textContent = q.ChoiceA;
    BBtn.textContent = q.ChoiceB;
    CBtn.textContent = q.ChoiceC;
}
function reportScore() {
}
ChoiceA.addEventListener('click', function () {
    Quiz('A')
})
ChoiceB.addEventListener('click', function () {
    Quiz('B')
})
ChoiceC.addEventListener('click', function () {
    Quiz('C')
})  