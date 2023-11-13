let talk; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    talk = loadAnimation('assets/Day3Bedroom.png', { frameSize: [160, 144], frames: 25});
    
}

function draw() {
    clear();
    animation(talk, 80, 72);
    talk.stop();
    talk.noLoop();
    if (kb.presses('ArrowRight')) {
        talk.nextFrame();
    }
    if (kb.presses('d')) {
        location.href = "index15.html";
    }
}