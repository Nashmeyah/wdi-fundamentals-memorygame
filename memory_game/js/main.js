const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match");
  } else {
    alert("Sorry try again!");
  }
}
function flipCard(cardId) {
  let card = cards[cardId];
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
  console.log("User flipped " + card.rank);
  console.log(card.cardImage);
  console.log(card.suit);

  cardsInPlay.push(card.rank);
}
flipCard(0);
flipCard(2);
