const gridContainer = document.querySelector(".grid-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");


let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

// Images for the cards
const cardImages = [
  "MemoryCardAssets/hellokitty.png",
  "MemoryCardAssets/mymelody.png",
  "MemoryCardAssets/bluepenguin.png",
  "MemoryCardAssets/badbadtzmaru.png",
  "MemoryCardAssets/froggy.png",
  "MemoryCardAssets/doggy.png",
  "MemoryCardAssets/cinnamoroll.png",
  "MemoryCardAssets/kuromi.png",
  "MemoryCardAssets/yellowdoggy.png",
];


// Initialize the game
function initGame() {
  cards = [...cardImages, ...cardImages]; // Duplicate images for pairs
  shuffle(cards);
  generateCards();
  score = 0;
  scoreElement.textContent = score;
}

// Shuffle cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate card elements
function generateCards() {
  gridContainer.innerHTML = ""; // Clear the container
  cards.forEach((image) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${image}" alt="Card Image">
        </div>
        <div class="card-back"></div>
      </div>
    `;
    cardElement.addEventListener("click", flipCard);
    gridContainer.appendChild(cardElement);
  });
}

// Flip a card
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkMatch();
}

// Check if two flipped cards match
function checkMatch() {
  const firstImage = firstCard.querySelector(".card-front img").src;
  const secondImage = secondCard.querySelector(".card-front img").src;

  if (firstImage === secondImage) {
    disableCards();
    updateScore();
  } else {
    unflipCards();
  }
}

// Disable matched cards
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

// Unflip non-matching cards
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

// Reset board state
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Update score
function updateScore() {
  score++;
  scoreElement.textContent = score;
}

// Restart game
restartButton.addEventListener("click", () => {
  initGame();
});

// Start the game
initGame();
