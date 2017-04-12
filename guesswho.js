

$(document).ready(function(){

//Appends a sketchpad div (block) to .container class element
//Inner loop makes 16 blocks for every time outer loop is run
for (var i = 0; i<16; i++)
{   
	for (var j=0; j<12; j++)
	{
		var newSketchpad=$("<div class='sketchpad'></div>");
	    newSketchpad.appendTo(".container");
    };
	
};

//Block changes color when hovering over square
$(".sketchpad").hover(function()
{  //when mouseenter block
  
    $(this).css("opacity", 0);
  
}
//to change color back when mouseleaves block
//, function()
//{ $(this).css("background-color", "#7d9ec0"); }
);

//Click on "clear grid" button, user prompt for squares per side
//$("#button").click(function(){
 // var squares=prompt("Time for a new board! How many squares per side this time?");
 // $(".container").empty();
//  console.log(squares);
 //  var newHeightWidth = 48/squares +"em"; //gets new height/width of each square
 //  console.log(newHeightWidth);
    
 // for(var k=0; k<squares; k++)
 // {
  //	for (m=0; m<squares; m++)
  //	{
  //	var $newSquare = $("<div class=resetSketchpad></div>");
  //	$newSquare.appendTo(".container");
  //	 $(".resetSketchpad").css("background-color", "#7d9ec0");
   //  $newSquare.css("border-style", "solid");
   //  $newSquare.css("border-width", ".25px");
   //  $newSquare.css("height", newHeightWidth);
  //   $newSquare.css("width", newHeightWidth);
   //  $newSquare.css("display", "inline-block");
   //  $newSquare.css("float", "left");

  //	console.log(k);
 //   };
 // };  

//  $(".resetSketchpad").hover(function()
 // {
  	//$(this).css("opacity", 0);
//  });
//});

$("#buttonImage").click(function(){
  var num= Math.floor((Math.random()*11) +1);
  console.log(num);
  $(".container").empty();
  switch(num){
    case 1:
      $(".container").css("background-image", "url(images/hippo.jpg)");
      break;
    case 2:
      $(".container").css("background-image", "url(images/bunny.jpeg)");
      break;
    case 3:
      $(".container").css("background-image", "url(images/elephant.jpeg)");
      break;
    case 4:
      $(".container").css("background-image", "url(images/giraffe.jpg)");
      break;
    case 5:
      $(".container").css("background-image", "url(images/hedgehog.jpeg)");
      break;
    case 6:
      $(".container").css("background-image", "url(images/horse.jpg)");
      break;
    case 7:
      $(".container").css("background-image", "url(images/ostrich.jpeg)");
      break;
    case 8:
      $(".container").css("background-image", "url(images/penguin.jpeg)");
      break;
    case 9:
      $(".container").css("background-image", "url(images/redpanda.jpeg)");
      break;
    case 10:
      $(".container").css("background-image", "url(images/tiger.jpeg)");
      break;
    case 11:
      $(".container").css("background-image", "url(images/turtle.jpg)");
      break;
    default:
      $(".container").css("background-image", "url(images/bear.jpg)");
  }
  
for (var i = 0; i<16; i++)
{   
  for (var j=0; j<12; j++)
  {
    var newSketchpad=$("<div class='sketchpad'></div>");
      newSketchpad.appendTo(".container");
    };
  
};

//Block changes color when hovering over square
$(".sketchpad").hover(function()
{  //when mouseenter block
  
    $(this).css("opacity", 0);
  
});

});




});