let time; 


function setup() {
    new Canvas(160, 144, 'pixelated x4');
    time = loadAnimation('assets/Time5.png', { frameSize: [160, 144], frames: 32});
    
}

function draw() {
    clear();
    animation(time, 80, 72);
	frameRate(16);

    time.noLoop();

	if (millis() >= 8600) {
		location.href = "index20.html";
	}
}