// var img1 = document.getElementsByClassName("img1");
// var img2 = document.getElementsByClassName("img2");
// // img1 =[images/dice1.png, images/dice2.png, images/dice3.png,images/dice4.png,images/dice5.png , images/dice6.png];
// // img2 = [images/dice1.png, images/dice2.png, images/dice3.png,images/dice4.png,images/dice5.png , images/dice6.png];
// var dice = Math.floor(Math.random(img1)* img1.length);
// var dice2 = Math.floor(Math.random(img2)* img2.length);
// document.getElementsByClassName("img1").src = img1[dice];
// document.getElementsByClassName("img2").src = img2[dice2];
var randomNumber = ["images/dice1.png", "images/dice2.png"," images/dice3.png","images/dice4.png","images/dice5.png "," images/dice6.png"];
function randomNumbers(){
    
var randomNumber1 = Math.floor((Math.random() * 6) );
var stc = randomNumber[randomNumber1];
// var randomNumber = ["images/dice1.png", "images/dice2.png"," images/dice3.png","images/dice4.png","images/dice5.png "," images/dice6.png"];
dice1.setAttribute("src" , stc);
var randomNumber2 = Math.floor((Math.random() * 6) );
var stcc = randomNumber[randomNumber2];
// var randomNumber = ["images/dice1.png", "images/dice2.png"," images/dice3.png","images/dice4.png","images/dice5.png "," images/dice6.png"];
dice2.setAttribute("src" , stcc);
if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 WINS!!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 WINS!!";
}else {
    document.querySelector("h1").innerHTML ="DRAW!!!!!!";
}
return stc , stcc;
}

