let clock;

function preload() {
	sheetImg = loadImage("assets/Clock.png");
}

function setup() {
	new Canvas(160, 144, 'pixelated x4');
	frameRate(60);
	let flipper = new Sprite(80, 0, 69, 20);
	flipper.img = 'assets/Minute.png';
	let flipper2 = new Sprite(80, 0, 46, 20);
	flipper2.img = 'assets/Hour.png'
	flipper.rotationSpeed = 3;
	flipper2.rotationSpeed = .24;
	flipper.offset.x = 30;
	flipper2.offset.x = 20;
	// flipper.overlaps(clock);
	flipper2.overlaps(flipper);
	// flipper2.overlaps(clock);
}

function draw() {

	clear();
	background(sheetImg)
	// if (kb.presses('n')) new Sprite(random(5, 155), random(100, 144), 
    // 10);

	// if (millis() >= 5000) {
		
	// }

	if (millis() >= 7000) {
		location.href = "index13.html"
		}
}