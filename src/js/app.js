const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit").addEventListener("click", answer);
const randomNumber = getRandomInt(11);

// Generate Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



// Guess
function answer(e){
  if (Number(guess.value) === randomNumber) {
      correctAnswer()
  } else {
    console.log("try again");
  }

  e.preventDefault();

}

function correctAnswer() {
  const container = document.getElementById("#container");
  const newP = document.createElement('p');
  const content = document.createTextNode(randomNumber + " is correct!") // randomNumber + " is correct!"
  const addP = newP.appendChild(content);
  //container.appendChild(newP);
  //document.body.insertBefore(newP, container);
  console.log('yup');
}


console.log(randomNumber);