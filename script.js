var infoBox = document.querySelector('.info_box')
var startButton = document.querySelector('#start_btn')
var firstDiv = document.querySelector('.first-div')
var exitButton = document.querySelector('.quit-button')
var continueButton = document.querySelector('.restart-button');
var submitScore = document.querySelector('#submit-score');
var nameInput = document.querySelector('#name');
// var quizBox = document.querySelector('.quiz_box')
// var quizBox2 = document.querySelector('.quiz_box2')
// var quizBox3 = document.querySelector('.quiz_box3')
var endBox = document.querySelector('.end_box')
var options = document.querySelectorAll('.option_list .options')
var gameOver = document.querySelector('.game_over')
var TIME = 30;
var finished = false;
var questionNumber = 1;

function updateTimer (time) {
    document.querySelector('.current .timer_sec').innerText = time
}

// timeLeft.addEventListener('click', startTimer)
// function startTimer()(){
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timerCount.textContent = secondsLeft;
//     if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             alert('game over')
//             }
//     }, 1000);

// startButton.addEventListener('click', function(){
//     secondsLeft = 10
//     winScore.innerText = '3'
//     randomWord = words[Math.floor(Math.random() * words.length)]
//     alert(randomWord)
//     timerStart()
// })

startButton.addEventListener('click', startGame)

function startGame(){
 infoBox.style.display= 'block';
 firstDiv.style.display = 'none';
}

function startTimer() {
    var timer = setInterval(function() {
        TIME--;
        if (TIME === 0 || finished)
        {
            clearInterval(timer);
            return;
        }
        updateTimer(TIME);
    },1000)
}


exitButton.addEventListener('click', exitGame)
function exitGame(){
    firstDiv.style.display = 'block';
    infoBox.style.display= 'none';
}

continueButton.addEventListener('click', continueGame)

function continueGame(){
    startTimer();
    firstDiv.style.display = 'none';
    infoBox.style.display= 'none';
    getCurrentQuestionElement().classList.toggle('current');
}

// correctAnswer1.addEventListener('click', question2)
// function question2(){
//     firstDiv.style.display = 'none';
//     infoBox.style.display= 'none';
//     quizBox.classList.toggle('current');
//     quizBox2.classList.toggle('current');
// }

// correctAnswer2.addEventListener('click', question3)
// function question3(){
//     firstDiv.style.display = 'none';
//     infoBox.style.display= 'none';
//     quizBox2.classList.toggle('current');
//     quizBox3.classList.toggle('current');

// }


// correctAnswer3.addEventListener('click', showGameOver);
function showGameOver() {
    firstDiv.style.display = 'none';
    infoBox.style.display= 'none';
    getCurrentQuestionElement().classList.toggle('current');
    endBox.style.display = 'block';
}

options.forEach(function (option) {
    option.addEventListener('click', checkAnswer)
})

function checkAnswer(event) {
    
    if (event.target.dataset.correct !== 'true') {
        TIME = TIME - 3;
    }
    if (questionNumber === 3) {
        showGameOver()
        exitGame()
        finished = true;
    } else {
        nextQuestion();
    }

};

function getCurrentQuestionElement() {
    return document.querySelector('.quiz_box' + questionNumber);
}



function nextQuestion() {
    getCurrentQuestionElement().classList.toggle('current');
    questionNumber++;
    getCurrentQuestionElement().classList.toggle('current');
}

submitScore.addEventListener('click', function () {
    var score = {name: nameInput.value, time: TIME};
    window.localStorage.setItem('score', JSON.stringify(score));
})

// get score
// localStorage.getItem('score')