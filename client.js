var redCount=0;
var blueCount=0
var greenCount=0;
var yellowCount=0;
var newColorBlock = $("<div class='color'>");

$(document).ready(function(){


// $('.color-button').on('click', function(){
// $(".container").append(newColorBlock);
//  // newColorBlock.css("background-color",".color");
// });

$("#red").on('click', function(){
  redCount++;
  $("#redcounter").text(redCount)
$(".container").last().append(newColorBlock);
newColorBlock.last().css("background-color", "red");


});

$("#blue").on('click', function(){
  blueCount++;
  $("#bluecounter").text(blueCount)
  $(".container").last().append(newColorBlock);
newColorBlock.last().css("background-color", "blue");
});

$("#green").on('click', function(){
  greenCount++;

  $("#greencounter").text(greenCount)
$(".container").last().append(newColorBlock);
newColorBlock.last().css("background-color", "green");
});

$("#yellow").on('click', function(){
  yellowCount++;
  $("#yellowcounter").text(yellowCount)
$(".container").last().append(newColorBlock);
newColorBlock.last().css("background-color", "yellow");
});








});
