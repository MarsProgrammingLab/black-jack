let cards = []; // array - containing list ordered of items
let sum = 0;
let hasBlackJack = false; // boolean variable hasBlackJack is false until player wins
let isAlive = false; // boolean variable isAlive is true when player is in game
let message = "";
// Set variables to ID elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// Create player object with two keys, name and chips, and set their values
let player = {
  name: "Martavias ",
  chips: 145,
};
// Retrieve player-el paragraph from index.html and store it in playerEl variable
let playerEl = document.getElementById("player-el");
// Render player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips;
// Create function getRandomCard() that returns a number between 1 and 13
function getRandomCard() {
  // Use Math.floor to remove decimals from returned n 
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

// Create function startGame which calls renderGame
function startGame() {
  isAlive = true;
  // Generate two random numbers
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // insert random numbers into cards array
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // for loop that renders out all cards in array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Allow player to get a new card if they're alive and did not win Blackjack
  if (hasBlackJack === false && isAlive === true) {
    let newCard = getRandomCard();
    sum += newCard;
    // Push new card to array of cards
    cards.push(newCard);
    renderGame();
  }
  // call renderFunction()
  //   console.log("Drawing a new card from the deck!");
}
