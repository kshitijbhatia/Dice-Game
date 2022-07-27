
// DICE 1
var number = Math.floor((Math.random()*6)+1);

var randomDiceImage = "dice" + number + ".png";

var randomImageSource = "images/" + randomDiceImage;

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomImageSource);


//DICE 2
var number2 = Math.floor((Math.random()*6) + 1);

var randomDiceImage2 = "dice" + number2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src",randomImageSource2);


if(number > number2){document.querySelector("h1").innerHTML = "Player 1 Wins"}
else if(number< number2){document.querySelector("h1").innerHTML = "Player 2 Wins"}
else{document.querySelector("h1").innerHTML = "DRAW"}
