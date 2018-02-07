const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit").addEventListener("click", answer);
const randomNumber = getRandomInt(11);
const showAnswer = document.querySelector("#showAnswer");
const guessesLeft = 3;

// Generate Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



// Guess
function answer(e){
  if (Number(guess.value) === randomNumber) {
      correctAnswer()
  } else if (guess.value === ''){
      empty();
  } else {
    console.log("try again");
  }

  e.preventDefault();

}

// If correct answer was guessed
function correctAnswer() {
  const game = document.getElementById("game");
  const newP = document.createElement('p');
  const content = document.createTextNode(randomNumber + " is correct!") // randomNumber + " is correct!"
  const addP = newP.appendChild(content);

  newP.className = 'text-success';
  guess.className = 'form-control is-valid';
  game.appendChild(newP);

  //submit.textContent = "Play Again";


  console.log('yup');
}

function empty() {
  const game = document.getElementById("game");
  const newP = document.createElement('p');
  const content = document.createTextNode("Please enter a number!") // randomNumber + " is correct!"
  const addP = newP.appendChild(content);

  newP.className = 'text-danger';
  guess.className = 'form-control is-invalid';
  game.appendChild(newP);

  //submit.textContent = "Play Again";


  console.log('yup');
}


console.log(randomNumber);