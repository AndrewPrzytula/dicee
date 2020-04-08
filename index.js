




document.querySelector(".play-button").addEventListener("click", function(){

randomchoice();

})



function randomchoice() {

var randomNumber = Math.ceil((Math.random()) * 6);

var diceNum = "images/dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceNum);


var randomNumber2 = Math.ceil((Math.random()) * 6);

var diceNum2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceNum2);


if (randomNumber > randomNumber2) {

  document.querySelector("h1").innerHTML = "Number 1 Win";

} else if (randomNumber < randomNumber2) {

  document.querySelector("h1").innerHTML = "Number 2 Win";

} else {

  document.querySelector("h1").innerHTML = "Is a Draw ";
}
}
