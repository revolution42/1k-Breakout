// Config
var width = 500;
var height = 500;
var noRows = 9;
var noCols = 9;
var elem = document.getElementById('c');
var ctx = elem.getContext("2d");
var startText = 'Click to start';
var n75 = 70;
elem.width = width;
elem.height = height;
elem.style.border = '1px dotted black';

addText(startText);
function addText(text)
{
	ctx.font         = '30px s';
	ctx.fillText(text, n75, n75);
}



function foo()
{
	function clear()
	{
		ctx.clearRect(0, 0, width, height);
	}
	
	
	var x = 75;
	var y = 250;
	var dx = 1;
	var dy = 4;
	var score = 0;
	
	
	var paddlex = width / 2;
	var paddleh = 9;
	var paddlew = n75;
	var canvasMaxX = 0 + width;
	var intervalId = setInterval(draw, 9);
	var brickWidth = (width / noCols) - 1;
	var brickHeight = 15;
	var padding = 1;
	var bricks = [];



	for (i = 0; i < noRows; i++)
	{
		bricks[i] = [];
		for (j = 0; j < noCols; j++)
			bricks[i][j] = 1;
	}

	function rect(x, y, w, h)
	{
		ctx.beginPath();
		ctx.rect(x, y, w, h);
		ctx.closePath();
		ctx.fill();
	}

	document.onmousemove = function(evt)
	{
		if (evt.pageX > 0 && evt.pageX < canvasMaxX)
			paddlex = evt.pageX - 0 - (paddlew / 2);
	};

	function draw()
	{
		clear();
		
		// Draw a circle
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();

		rect(paddlex, height - paddleh, paddlew, paddleh);

		for (i = 0; i < noRows; i++)
		{
			for (j = 0; j < noCols; j++)
			{
				if (bricks[i][j])
					rect((j * (brickWidth + padding)) + padding,
							(i * (brickHeight + padding)) + padding,
							brickWidth, brickHeight);
			}
		}

		// have we hit a brick?
		var rowheight = brickHeight + padding;
		var colwidth = brickWidth + padding;
		var f = Math.floor;
		var row = f(y / rowheight);
		var col = f(x / colwidth);
		// if so, reverse the ball and mark the brick as broken
		if (y < noRows * rowheight && row >= 0 && col >= 0
				&& bricks[row][col] == 1)
		{
			dy = -dy;
			bricks[row][col] = 0;
			score++;
		}

		if (x + dx > width || x + dx < 0)
			dx = -dx;

		if (y + dy < 0)
			dy = -dy;
		else if (y + dy > height)
		{
			if (x > paddlex && x < paddlex + paddlew)
				dy = -dy;
			else
			{
				clearInterval(intervalId);
				clear();
				addText('Game Over');
				ctx.fillText('Score: ' + score, n75, 99);
				ctx.fillText(startText, n75, 175);
				
			}
			
		}

		x += dx;
		y += dy;
	}
}

elem.onclick = foo;