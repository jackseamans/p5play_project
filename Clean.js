let clean;

function preload() {
	sheetImg = loadImage("assets/CleanBG.png");
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    clean = loadAnimation('assets/CleanStuff.png', { frameSize: [160, 144], frames: 12 });
    cleanFrame = loadAnimation('assets/CleanFrame.png', { frameSize: [160, 144], frames: 3 });    
}

function draw() {
    clear();
    background(sheetImg)
    frameRate(40)
    animation(cleanFrame, 80, 72);
    animation(clean, 80, 72);
    
    clean.stop();
    clean.noLoop();
    if (kb.presses('ArrowRight')) {
        clean.nextFrame();
    }
    if (kb.presses('t')) {
        location.href = "index7.html";
    }
}

