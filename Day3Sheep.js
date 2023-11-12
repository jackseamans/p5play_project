let talk; 

function preload() {

}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    talk = loadAnimation('assets/Day3Sheep.png', { frameSize: [160, 144], frames: 8});
    
}

function draw() {
    clear();
    animation(talk, 80, 72);
    talk.stop();
    talk.noLoop();
    if (kb.presses('ArrowRight')) {
        talk.nextFrame();
    }
    if (kb.presses('a')) {
        location.href = "index19.html";
    }
}