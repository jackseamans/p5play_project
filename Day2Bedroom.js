let note1; note2;

function preload() {
    sheetImg = loadImage("assets/Note.png");
    sheetImg2 = loadImage("assets/Note2.png");
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
}

function draw() {
    clear();
    background(sheetImg);
    if (millis() > 3000) {
        background(sheetImg2)
    }
    if (kb.presses('c')) {
        location.href = "index6.html";
    }
}
