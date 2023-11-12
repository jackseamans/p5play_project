let talk; 

function preload() {
        // dinner1 = new Sprite(80, 72, 160, 144);
        // dinner1.spriteSheet = 'assets/Dinner1.png';
        // dinner1.addAnis({
        //     frame: { row: 0, frames: 31 },
        // });
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    talk = loadAnimation('assets/Day3Morning.png', { frameSize: [160, 144], frames: 10});
    
}

function draw() {
    clear();
    animation(talk, 80, 72);
    talk.stop();
    talk.noLoop();
    if (kb.presses('ArrowRight')) {
        talk.nextFrame();
    }
    if (kb.presses('Enter')) {
        location.href = "index14.html";
    }
}