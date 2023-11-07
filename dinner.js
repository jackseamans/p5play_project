let dinnerTable;

function preload() {
    sheetImg = loadImage("assets/Kitchen.png");
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    frameRate(30);
    allSprites.pixelPerfect = true;

    dinnerTable = new Sprite(77, 100, 109, 75);
    dinnerTable.img = 'assets/DinnerTable.png';
    dinnerTable.collider = "static";

}

function draw() {
    background(sheetImg);

    if (millis() >= 5000) {
        location.href = "index3.html"
    }
}

