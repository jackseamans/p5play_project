let talk; sky; 

function preload() {
    // sheetImg = loadImage("assets/Tiles-and-Enemies.png" );
    sky = loadImage("assets/NightSky.gif");
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    talk = loadAnimation('assets/Day3Sheep.png', { frameSize: [160, 144], frames: 9});
    
    // grass = new Group();
    // grass.collider = "static";
    // grass.spriteSheet = sheetImg;
    // grass.addAni({ w:8, h:8, row: 3, col: 3});
    // grass.tile = 'g';
    
    // fence = new Group();
    // fence.collider = "static";
    // fence.spriteSheet = sheetImg;
    // fence.addAni({ w:8, h:8, row: 10, col: 3});
    // fence.tile = 'f';
    
    // dirt = new Group();
    // dirt.collider = "static";
    // dirt.spriteSheet = sheetImg;
    // dirt.addAni({ w:8, h:8, row: 9, col: 1});
    // dirt.tile = 'd';

    // new Tiles(
    //     [

    //         '..........fff........',
    //         '..........fff........',
    //         'ggggggggggggggggggggg',
    //         'ddddddddddddddddddddd',
    //         'ddddddddddddddddddddd',
    //         'ddddddddddddddddddddd',

    //     ],
    //     0, 100, // x, y
    //     8, 8 // w, h
    // );
    
}

function draw() {
    clear();
    image(sky, 0, 0)
    animation(talk, 80, 72);
    talk.stop();
    talk.noLoop();
    if (kb.presses('ArrowRight')) {
        talk.nextFrame();
    }
    if (kb.presses('s')) {
        location.href = "index19.html";
    }
}