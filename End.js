let end; 


function setup() {
    new Canvas(160, 144, 'pixelated x4');
    end = loadAnimation('assets/End.png', { frameSize: [160, 144], frames: 4});
    // time.animation.frameDelay = 5;
}

function draw() {
    clear();
    animation(end, 80, 72);
	frameRate(1.3);
    
    end.noLoop();
    


	if (millis() >= 12000) {
		location.href = "index.html";
	}
}