const { fabric } = require("./fabric")

var canvas = new fabric.Canvas("myCanvas")

ballx = 0
bally = 0
holex = 1300
holey = 800


block_image_width = 5;
block_image_height = 5;

function load_img(){	
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(150);
		hole_obj.scaleToHeight(140);
		hole_obj.set({
			top:holey,
			left:holex
			});
			canvas.add(hole_obj)
		})
		new_image();
	}
	


function new_image()
{
	fabric.Image.fromURL("ball.png", function(img){
		ball_obj = img;
		ball_obj.scaleToWidth(150);
		ball_obj.scaleToHeight(140);
		ball_obj.set({
			top:bally,
			left:ballx
			});
			canvas.add(ball_obj)
		})
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballx == holex)&&(bally == holey)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="You have hit the goal..."
		document.getElementById("myCanvas").style.borderColor="red"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally >=5){
			bally = bally - block_image_height
			canvas.remove(ball.obj)
			new_image()
		}
	}

	function down()
	{
		if(bally <=995){
			bally = bally + block_image_height
			canvas.remove(ball.obj)
			new_image()
	}

	function left()
	{
			if(ballx >=5){
				ballx = ballx - block_image_width
				canvas.remove(ball.obj)
				new_image()
			}
	}

	function right()
	{
		if(ballx <=1500)
		{
			ballx = ballx + block_image_width
			canvas.remove(ball.obj)
			new_image()
		}
	}
	
}
}
