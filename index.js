// Dice 1:
var diceRandom1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var diceImageName = "dice" + diceRandom1 + ".png";
var diceImageSource = "images/" + diceImageName;
var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", diceImageSource);


// Dice 2:
var diceRandom2 = Math.floor(Math.random() * 6) + 1;
var diceImageSource2 = "images/dice" + diceRandom2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageSource2);

// Title Change:
if (diceRandom1 > diceRandom2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (diceRandom1 < diceRandom2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
