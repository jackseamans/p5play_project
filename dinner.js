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

function preload() {
        // dinner1 = new Sprite(80, 72, 160, 144);
        // dinner1.spriteSheet = 'assets/Dinner1.png';
        // dinner1.addAnis({
        //     frame: { row: 0, frames: 31 },
        // });
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    dinner1 = loadAnimation('assets/Dinner1.png', { frameSize: [160, 144], frames: 31 });
    
}

function draw() {
    clear();
    animation(dinner1, 80, 72);
    dinner1.stop();
    if (kb.presses('ArrowRight')) {
        dinner1.nextFrame();
    }
}

