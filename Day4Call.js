let call; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    call = loadAnimation('assets/Day4Call.png', { frameSize: [160, 144], frames: 9});
    
}

function draw() {
    clear();
    animation(call, 80, 72);
    call.stop();
    call.noLoop();
    if (kb.presses('ArrowRight')) {
        call.nextFrame();
    }
    if (kb.presses('g')) {
        location.href = "index21.html";
    }

}