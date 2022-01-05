canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	window.addEventListener("keydown" , my_keydown)
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You have passed alphabet key";
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}


function arrowkey()
{
	arrowkey = e.keyCode;
    console.log(arrowkey);
    if(arrowkey=='38')
    {
        up();
        console.log("up");
    }
    if(arrowkey=='40')
    {
        down();
        console.log("down");
    }
    if(arrowkey=='37')
    {
        left();
        console.log("left");
    }
    if(arrowkey=='39')
    {
        right();
        console.log("right");
    }
	img_image="Arrkey.png";
	add();
}

	

	
