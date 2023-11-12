let dinner2; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner2 = loadAnimation('assets/Day3Evening2.png', { frameSize: [160, 144], frames: 10});
    
}

function draw() {
    clear();
    animation(dinner2, 80, 72);
    dinner2.stop();
    dinner2.noLoop();
    if (kb.presses('ArrowRight')) {
        dinner2.nextFrame();
    }
    if (kb.presses('Enter')) {
        location.href = "index18.html";
    }
}