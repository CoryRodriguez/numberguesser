const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit").addEventListener("click", answer);
const submitBtn = document.querySelector("#submit");
const randomNumber = getRandomInt(11);
const showAnswer = document.querySelector("#showAnswer");
const message = document.querySelector("#message");
const game = document.querySelector("#game");
let guessesLeft = 3;

// Generate Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * 10) + 1 ;
}

// Play again event listener
  game.addEventListener('mousedown', function(e){
    if(e.target.value === 'Play Again?'){
      window.location.reload();
    }
  })

// Guess
function answer(e){
  if (Number(guess.value) === randomNumber) {
    correctAnswer()
    playAgain()
  } else if (guess.value === '' || Number(guess.value) < 1 || Number(guess.value) > 10){
      empty();
  } else {
    wrongNumber();
    console.log("try again");
  }

  e.preventDefault();

}

// If correct answer was guessed
function correctAnswer() {
  // Create p element
  // const game = document.getElementById("game");
  // const newP = document.createElement('p');
  // const addP = newP.appendChild(content);
  //const content = document.createTextNode(`${randomNumber} is correct!`) // randomNumber + " is correct!"
  //const content = document.createTextNode(`${randomNumber} is correct!`) // randomNumber + " is correct!"


  // Fill p element
  //message.textContent = content;

  //newP.className = 'text-success';

  //game.appendChild(newP);

  //submit.textContent = "Play Again";


  setMessage(`${randomNumber} is correct, YOU WIN!`);
  message.className = 'text-success';
  guess.className = 'form-control is-valid';

  // Disable the input
  guess.disabled = true;

  console.log('yup');
}

function setMessage(msg) {
  message.textContent = msg;
}

// If empty, under 1 or over 10 
function empty() {
  // Create p element
  // const game = document.getElementById("game");
  // const newP = document.createElement('p');
  // const content = document.createTextNode("Please enter a valid number!") // randomNumber + " is correct!"
  // const addP = newP.appendChild(content);
  setMessage(`Please enter a valid number!`);

  //newP.className = 'text-danger';
  message.className = 'text-danger';
  guess.className = 'form-control is-invalid';
  //game.appendChild(newP);

  //submit.textContent = "Play Again";


  console.log('yup');
}

// Wrong number
  function wrongNumber(){
    guessesLeft -= 1;

    if (guessesLeft === 0){
      // Game over - lost
      setMessage(`Game over, you lost. The correct number was ${randomNumber}!`);

      message.className = 'text-danger';
      guess.className = 'form-control is-invalid';
      guess.disabled = true;
      playAgain();

    } else {
      // Game continues - answer wrong
      setMessage(`${guess.value} is not correct, ${guessesLeft} guesses left`);
      message.className = 'text-danger';
      guess.className = 'form-control is-invalid';

      // Clear Input
      guess.value = '';

    }
  }

  // Play again
  function playAgain(){
    submitBtn.value = 'Play Again?';
    submitBtn.className += ' play-again';
  }


console.log(randomNumber);