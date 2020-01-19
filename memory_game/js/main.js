const cards = ["queen", "queen", "king", "king"];

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
  console.log("User flipped " + card);
  cardsInPlay.push(card);
}
flipCard(0);
flipCard(2);
