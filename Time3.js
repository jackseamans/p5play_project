// let time1, time2; time3; time4; time5;

// function setup() {
// 	new Canvas (160, 144, 'pixelated x4')
// 	time1 = new Sprite(80, 72, 5, 5);
// 	time2 = new Sprite(200, 300, 5, 5);
// 	time3 = new Sprite(200, 400, 5, 5);
// 	time4 = new Sprite(200, 500, 5, 5);
// 	time5 = new Sprite(200, 600, 5, 5);
	
// }

// function draw() {

// 	clear();
// 	if (millis() >= 1000) {
// 	  time1.x = -100
// 	  time2.x = 80
// 	  time2.y = 72
// 	}
// 	if (millis() >= 2000) {
// 	  time2.x = -200
// 	  time3.x = 80
// 	  time3.y = 72
// 	}
// 	if (millis() >= 3000) {
// 	  time3.x = -300
// 	  time4.x = 80
// 	  time4.y = 72
// 	}
// 	if (millis() >= 4000) {
// 	  time4.x = -400
// 	  time5.x = 80
// 	  time5.y = 72
// 	}

// 	if (millis() >= 6000) {
// 		location.href = "index14.5.html"
// 	}
// }

// function preload(){
//     prstart = loadFont('assets/prstart.ttf');
// }

let time; time2; time3; time4; time5; time6; time7;
let prstart;

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    world.gravity.y = 1;

    time = new Sprite(72, 80, 5, 10);
    time.color = 'black';
    time.stroke = 'black';
    time.textSize = 16;
    time.text = "8:30AM";
    time.textColor = "white";

	time2 = new Sprite(72, -20, 5, 10);
    time2.color = 'black';
    time2.stroke = 'black';
    time2.textSize = 16;
    time2.text = "9:30AM";
    time2.textColor = "white";

	time3 = new Sprite(72, -120, 5, 10);
    time3.color = 'black';
    time3.stroke = 'black';
    time3.textSize = 16;
    time3.text = "11:00AM";
    time3.textColor = "white";

	time4 = new Sprite(72, -220, 5, 10);
    time4.color = 'black';
    time4.stroke = 'black';
    time4.textSize = 16;
    time4.text = "1:00PM";
    time4.textColor = "white";

	time5 = new Sprite(72, -320, 5, 10);
    time5.color = 'black';
    time5.stroke = 'black';
    time5.textSize = 16;
    time5.text = "3:00PM";
    time5.textColor = "white";

	time6 = new Sprite(72, -420, 5, 10);
    time6.color = 'black';
    time6.stroke = 'black';
    time6.textSize = 16;
    time6.text = "5:00PM";
    time6.textColor = "white";

}

function draw() {

   clear();
   background("black");
    // if (time.collided(time2)) {
    //     world.gravity.y = 8;
    //     time2.collider = 'dynamic';
    //     time.collider = 'static';
    // }

	if (time6.y >= 80) {
		time6.collider = 'static';
	}

    if (millis() > 6000) {
        location.href = "index14.5.html"
    }

}

function preload(){
    prstart = loadFont('assets/prstart.ttf');
}