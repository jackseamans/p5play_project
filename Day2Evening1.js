let dinner2; 

function preload() {
        // dinner1 = new Sprite(80, 72, 160, 144);
        // dinner1.spriteSheet = 'assets/Dinner1.png';
        // dinner1.addAnis({
        //     frame: { row: 0, frames: 31 },
        // });
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner2 = loadAnimation('assets/Day2Evening1.png', { frameSize: [160, 144], frames: 2});
    
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
        location.href = "index11.html";
    }
}