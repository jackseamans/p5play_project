let kitty;
let floor; 
let fence;
let score = 0;

function preload() {
    sheetImg = loadImage("assets/Tiles-and-Enemies.png" );
    sky = loadImage("assets/NightSky.gif");
    kitty = new Sprite(55, 20, 14, 16);
    kitty.spriteSheet = 'assets/Basic Charakter Spritesheet 14x16.png';
    kitty.addAnis({
        front: { row: 0, frames: 4 },
        back: { row: 1, frames: 4 },
        left:  { row: 2, frames: 4 },
        right: { row: 3, frames: 4 },
    });
    kitty.changeAni('front');
    kitty.x = 10;
    kitty.y = 80;
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    textSize(20);
    fill(255);

    // allSprites.pixelPerfect = true;
    world.gravity.y = 1;

    grass = new Group();
    grass.collider = "static";
    grass.spriteSheet = sheetImg;
    grass.addAni({ w:8, h:8, row: 3, col: 3});
    grass.tile = 'g';
    
    fence = new Group();
    fence.collider = "static";
    fence.spriteSheet = sheetImg;
    fence.addAni({ w:8, h:8, row: 10, col: 3});
    fence.tile = 'f';
    
    dirt = new Group();
    dirt.collider = "static";
    dirt.spriteSheet = sheetImg;
    dirt.addAni({ w:8, h:8, row: 9, col: 1});
    dirt.tile = 'd';

    new Tiles(
        [

            '..........f..........',
            '..........f..........',
            'ggggggggggggggggggggg',
            'ddddddddddddddddddddd',
            'ddddddddddddddddddddd',
            'ddddddddddddddddddddd',

        ],
        0, 100, // x, y
        8, 8 // w, h
    );


}

function draw() {
    // clear();
    image(sky, 0, 0);
    // textSize(20);
    text(score, 137, 20);

    kitty.rotation = 0;

    if (kb.pressing('left')) {
        kitty.vel.x = -1;
        kitty.changeAni('left');
    }
    else if (kb.pressing('right')) {
        kitty.vel.x = 1;
        kitty.changeAni('right');
      
    }
    else {kitty.vel.x = 0;
    }

    if (kb.presses('up')) {
        kitty.vel.y = 4;
    }

    if (kitty.x >= 135) {
        score = score + 1;
        kitty.changeAni('front');
        kitty.x = 10;
        kitty.y = 105;
    }

    if (kitty.y >= 105) {
        kitty.changeAni('front');
        kitty.x = 10;
        kitty.y = 105;
    }

    if (score >= 10) {
        location.href = "index2.html"
    }
}
