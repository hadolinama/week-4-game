 var radNum = 1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 13; 14; 15; 16; 17; 18; 19; 20;
 var maximum = 20;
 var minimum = 1;

 var wins = 0;
 var losses = 0;
 var blue = 0;
 var yellow = 0;
 var green = 0;
 var red = 0;

// function ShowRandomNumber (radNum) {

// //$("#blue").click(radNum);
//  // $("#gren").click(radNum);
//  // $("#yellow").click(radNum);
//   //$("#red").click(radNum);
// }
// ShowRandomNumber();  
// //console.log("Hello");

$( document ).ready(function() {
    console.log( "ready!" );
var randomNumber = Math.floor(Math.random() * 20);


$("#total").text(randomNumber);

$("#blue").click(function() {
$("#freeze").text("Wins:");

 if (randomNumber === 0) {
    $("#green").html("<img src='assets/images/green.jpg' />");
  }

});

});

