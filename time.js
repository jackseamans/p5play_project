let time = "9:37PM"; 

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    background(0);
    textSize(15);
    fill(255);
}

function draw() {
    text(time, 58, 72)
}