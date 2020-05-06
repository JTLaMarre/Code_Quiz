// dom vars
var startBtn = document.getElementById("submit");
var timer = document.getElementById("timer");
var ChoiceA = document.getElementById("ABtn")
var ChoiceB = document.getElementById("BBtn");
var ChoiceC = document.getElementById("CBtn");
var score = document.getElementById("score");
var DQ = document.getElementById("DQ");
var startMSG = document.getElementById("startMSG");
var title = document.getElementById('title');
var main = document.getElementById('main');


// Script vars index(currentquestion), score, quiz key
var Sc = 10
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
        ChoiceA: "A:creating actions",
        ChoiceB: "B:creating styling on a webpage",
        ChoiceC: "C:writing text elements.",
        correct: 'A'
    },
    {
        question: 'which method is used to end an interval?',
        ChoiceA: "Stop()",
        ChoiceB: "intervalcelar()",
        ChoiceC: "clearinterval()",
        correct: 'C'
    },
    {
        question: 'which is the correct notation to call the first object in an array',
        ChoiceA: "A:array.indexof(0)",
        ChoiceB: "B: array[0]",
        ChoiceC: "C:array(0)",
        correct: 'B'
    },
    {
        question: 'what is bootstrap?',
        ChoiceA: "A: a strap on a boot!",
        ChoiceB: "B: a website with cool layouts",
        ChoiceC: "C: a styling framework for responsive web design",
        correct: 'C'
    },
    {
        question: 'What does responsive web design mean?',
        ChoiceA: "A: the website talks to you.",
        ChoiceB: "B: the website adjusts content for multiple screen sizes.",
        ChoiceC: "C: the website takes user inputs",
        correct: 'B'
    },
    {
        question: "If Batman's utility belt was a javascript file what would the file name be?",
        ChoiceA: "A:Utilitybelt.js",
        ChoiceB: "B:utilitybelt.html",
        ChoiceC: "C:utilitybelt.css",
        correct: 'A'
    },
    {
        question: 'which terminal command creates a folder',
        ChoiceA: "A: cd folder",
        ChoiceB: "B: mkdir",
        ChoiceC: "C: git commit",
        correct: 'B'
    },
    {
        question: 'before using git push you should always',
        ChoiceA: "A: wash your hands",
        ChoiceB: "B: git Pull",
        ChoiceC: "C: git clone",
        correct: 'B'
    },
]
var questionIndex = questions.length - 1;

var currentquestion = 0
var startTime = 300;

var highscores = []
var saved = JSON.parse(localStorage.getItem('score'))
if (saved != null){
    highscores = saved
}

// displayed question generation
var q = questions[currentquestion];
var Displayed_q = document.createElement('p');
Displayed_q.textContent = q.question;
DQ.appendChild(Displayed_q);
Displayed_q.style.display = "none";

// start button! and timer
startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    DisplayQuestion()
    var quizInterval = setInterval(function () {
        timer.textContent = startTime + "seconds";
        startTime--;
        
        
        if (startTime <= 0 || currentquestion === questions.length) {
            clearInterval(quizInterval);
            timer.textContent = ""
            reportScore();
        }
    }, 1000)
    
})
// running the Quiz
function Quiz(UserChoice) {
    
    if (UserChoice === q.correct) {
        score.textContent = Sc + ":currentScore out of 10"
        currentquestion++;
        
        NextQuestion();
    }
    else {
        Sc--;
        startTime = parseInt(startTime) - 60;
        score.textContent = Sc + ":currentScore out of 10"
        currentquestion++;
        NextQuestion();
    }
    
}
// disokay the first question and remove the start button
function DisplayQuestion() {
    startBtn.remove();
    startMSG.remove();
    score.textContent = Sc + ":currentScore out of 10"
    Displayed_q.style.display = "inline"
    ABtn.textContent = q.ChoiceA;
    BBtn.textContent = q.ChoiceB;
    CBtn.textContent = q.ChoiceC;
}
// progess questions
function NextQuestion() {
    
    if (currentquestion < questions.length) {
        q = questions[currentquestion];
        Displayed_q.textContent = q.question;
        ABtn.textContent = q.ChoiceA;
        BBtn.textContent = q.ChoiceB;
        CBtn.textContent = q.ChoiceC;
    }
    if (currentquestion === questions.length || startTime <= 0) {
        Displayed_q.textContent = "finished!";
        ABtn.remove();
        BBtn.remove();
        CBtn.remove();
    }
}
// display score & record highscores
function reportScore() {
    title.textContent = "Your Score is " + Sc;
    score.textContent = "type initials here";
    var initials = document.createElement('input')
    score.appendChild(initials)
    var submit = document.createElement('button')
    submit.textContent = "Submit score"
    score.appendChild(submit)
    submit.className = "btn btn-success btn-small";
    submit.addEventListener('click',function(){
        submit.remove();
        score.textContent = '';
        if(initials.value != '')
        highscores.push(initials.value +"-"+ Sc);
        var storedScrore = localStorage.setItem('score',JSON.stringify(highscores));
        Displayed_q.textContent = initials.value +'-'+ Sc +" :Current score"
        score.textContent = "last score "+ highscores[highscores.length-2];
        initials.remove();
        reTake();
    })
    
}
function reTake(){
    var retake = document.createElement('button')
    retake.textContent = "retake Quiz"
    score.appendChild(retake)
    retake.className = "btn btn-success btn-small";
    retake.addEventListener('click',function(){
        location.reload();
    })
}



// userChoice 
ChoiceA.addEventListener('click', function () {
    Quiz('A')
})
ChoiceB.addEventListener('click', function () {
    Quiz('B')
})
ChoiceC.addEventListener('click', function () {
    Quiz('C')
})  