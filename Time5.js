let time1, time2; time3; time4; time5;

function setup() {
	new Canvas (160, 144, 'pixelated x4')
	time1 = new Sprite(80, 72, 5, 5);
	time2 = new Sprite(200, 300, 5, 5);
	time3 = new Sprite(200, 400, 5, 5);
	time4 = new Sprite(200, 500, 5, 5);
	time5 = new Sprite(200, 600, 5, 5);
	
}

function draw() {

	clear();
	if (millis() >= 1000) {
	  time1.x = -100
	  time2.x = 80
	  time2.y = 72
	}
	if (millis() >= 2000) {
	  time2.x = -200
	  time3.x = 80
	  time3.y = 72
	}
	if (millis() >= 3000) {
	  time3.x = -300
	  time4.x = 80
	  time4.y = 72
	}
	if (millis() >= 4000) {
	  time4.x = -400
	  time5.x = 80
	  time5.y = 72
	}
	if (millis() >= 6000) {
		location.href = "index20.html"
	}

}