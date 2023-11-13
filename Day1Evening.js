// let dinnerTable;

// function preload() {
//     sheetImg = loadImage("assets/Kitchen.png");
// }

// function setup() {
//     new Canvas(160, 144, 'pixelated x4');
//     frameRate(30);
//     allSprites.pixelPerfect = true;

//     dinnerTable = new Sprite(77, 100, 109, 75);
//     dinnerTable.img = 'assets/DinnerTable.png';
//     dinnerTable.collider = "static";

// }

// function draw() {
//     background(sheetImg);

//     if (millis() >= 5000) {
//         location.href = "index3.html"
//     }
// }

let dinner1;

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner1 = loadAnimation('assets/Day1Evening.png', { frameSize: [160, 144], frames: 31 });
    
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


