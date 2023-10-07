//1st dice
const number1 = Math.round(Math.random()*5)+1;
const imageSource1 = "images/dice"+number1+".png";
console.log(imageSource1);
$("img")[0].setAttribute('src',imageSource1);

//2nd dice
const number2 = Math.round(Math.random()*5)+1;
const imageSource2 = "images/dice"+number2+".png";
console.log(imageSource2);
$("img")[1].setAttribute("src",imageSource2);

//winner
if (number1>number2) {
    $("h1").text("Player 1 Wins");
}else if(number1<number2){
    $("h1").text("Player 2 Wins");
}else{
    $("h1").text("Draw!");
}
