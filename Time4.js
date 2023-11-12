let time;
let time2;
let prstart;

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    world.gravity.y = 1;

    time = new Sprite(72, -120, 5, 10);
    time.color = 'black';
    time.stroke = 'black';
    time.textSize = 16;
    time.text = "8:30AM";
    time.textColor = "white";

	time2 = new Sprite(72, 80, 5, 10, 'static');
    time2.color = 'black';
    time2.stroke = 'black';
    time2.textSize = 16;
    time2.text = "9:37PM";
    time2.textColor = "white";

}

function draw() {

   clear();
   background("black");
    if (time.collided(time2)) {
        world.gravity.y = 8;
        time2.collider = 'dynamic';
        time.collider = 'static';
    }

    if (millis() > 6000) {
        location.href = "index15.html"
    }

}

function preload(){
    prstart = loadFont('assets/prstart.ttf');
}