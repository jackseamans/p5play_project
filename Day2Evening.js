let dinner2; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner2 = loadAnimation('assets/Day2Evening.png', { frameSize: [160, 144], frames: 24});
    
}

function draw() {
    clear();
    animation(dinner2, 80, 72);
    dinner2.stop();
    dinner2.noLoop();
    if (kb.presses('ArrowRight')) {
        dinner2.nextFrame();
    }
    if (kb.presses('a')) {
        location.href = "index9.html";
    }
    if (kb.presses('b')) {
        location.href = "index10.html";
    }
}