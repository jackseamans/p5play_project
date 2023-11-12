let dinner2; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner2 = loadAnimation('assets/Day3Evening.png', { frameSize: [160, 144], frames: 15});
    
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
        location.href = "index16.html";
    }
    if (kb.presses('b')) {
        location.href = "index17.html";
    }
}