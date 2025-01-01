let randomNumber =parseInt(Math.random()*100 +1)

const submit = document.getElementById('#subt');
const UserInput = document.querySelector('#Guessfield')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess =parseInt(UserInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number more than 1')

    }else if(guess > 100){
        alert('Please enter a number less than 100')

    }else{
        previousGuesses.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`The Game is over. Random number was ${randomNumber}`);
            endGame();

        }else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }


    }



function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Congratulations! You have guess right number`)
        endGame();
    }else if (guess < randomNumber){
        displayMessage(' You have guess too low')
    }else if(guess > randomNumber){
        displayMessage('You have guess too high')
    }
     

}

function displayGuess(guess){
    UserInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
 

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}


function endGame(){
    UserInput.value= '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML= `<h2 id='newGame'> Start New Game </h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();

    


}
function newGame(){
    const newGameButton= document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber=parseInt(Math.random()*100 +1)
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        UserInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playGame = true;})

}
    
