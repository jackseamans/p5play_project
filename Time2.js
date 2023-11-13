let time, time2;

function setup() {
	new Canvas(160, 144, 'pixelated x4');
	world.gravity.x = 1;
	
	time = new Sprite(72, 80, 5, 10);
    time.color = 'black';
    time.stroke = 'black';
    time.textSize = 16;
    time.text = "8:45AM";
    time.textColor = "white";

	time2 = new Sprite(-100, 80, 5, 10);
    time2.color = 'black';
    time2.stroke = 'black';
    time2.textSize = 16;
    time2.text = "6:00PM";
    time2.textColor = "white";

	time.overlaps(time2);
}

function draw() {

	clear();

	background("black");

	if (time2.x >= 72) {
	  time2.collider = "static";
		
	}
	if (millis() >= 4000) {
	location.href = "index8.html"
	}
	
}
