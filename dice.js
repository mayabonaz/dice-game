// Get Random numbers
var randNum1 = Math.floor((Math.random() * 6) + 1);
var randNum2 = Math.floor((Math.random() * 6) + 1);

var diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

var diceImage1 = "images/" + diceImages[randNum1 - 1];
var diceImage2 = "images/" + diceImages[randNum2 - 1];

document.querySelector(".img1").src = diceImage1;
document.querySelector(".img2").src = diceImage2;

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🏳‍🌈 Player 1 Wins!";
} else if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏳‍🌈‍";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
