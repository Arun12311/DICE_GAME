

// first Image
var randomNumber1 = Math.floor(Math.random()*6) +1;   //We get 1 to 6 random  numbers

var randomDiceImage  = "dice"+ randomNumber1+".png";    //We get    dice1.png - dice6.png

var randomImageSource =  "images/"+ randomDiceImage;    //  we  get  images/dice1.png - dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);     // change the attribute

//Second image

var randomNumber2 = Math.floor(Math.random()*6 )+1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 WINS!!";
}

else if (randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 WINS!!";
}

else
{
  document.querySelector("h1").innerHTML = "Draw!!" ;
}
