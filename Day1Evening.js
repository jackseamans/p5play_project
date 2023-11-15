let dinner1;

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner1 = loadAnimation('assets/Day1Evening.png', { frameSize: [160, 144], frames: 32 });
    
}

function draw() {
    clear();
    animation(dinner1, 80, 72);
    dinner1.stop();
    dinner1.noLoop();
    if (kb.presses('ArrowRight')) {
        dinner1.nextFrame();
    }
    if (kb.presses('c')) {
        location.href = "index3.html";
    }
}


