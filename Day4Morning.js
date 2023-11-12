let talk; momCry;

function preload () {
    momCry = new Sprite(80, 129, 23, 31);
    momCry.spriteSheet = 'assets/MomCry.png';
    momCry.addAnis({
        front: { row: 0, frames: 8 },
    });
    momCry.changeAni('front');
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    talk = loadAnimation('assets/Day4Morning.png', { frameSize: [160, 144], frames: 11});
    
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
        location.href = "index21.html";
    }
}