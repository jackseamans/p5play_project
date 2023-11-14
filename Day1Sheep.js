let sheep;
let floor; 
let fence;
let score = 0;

function preload() {
    sheetImg = loadImage("assets/Ground.png" );
    sky = loadImage("assets/NightSky.gif");
    sheep = new Sprite(5, 10, 60, 52);
    sheep.spriteSheet = 'assets/SheepSprite.png';
    sheep.addAnis({
        right: { row: 0, frames: 16 },
        // back: { row: 1, frames: 4 },
        // left:  { row: 2, frames: 4 },
        // right: { row: 3, frames: 4 },
    });
    sheep.changeAni('right');
    sheep.x = 30;
    sheep.y = 85;
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
    grass.addAni({ w:8, h:8, row: 0, col: 0});
    grass.tile = 'g';
    
    grass2 = new Group();
    grass2.collider = "static";
    grass2.spriteSheet = sheetImg;
    grass2.addAni({ w:8, h:8, row: 0, col: 1});
    grass2.tile = 'r';
    
    fence = new Group();
    fence.collider = "static";
    fence.spriteSheet = sheetImg;
    fence.addAni({ w:8, h:8, row: 0, col: 4});
    fence.tile = 'f';
    
    dirt = new Group();
    dirt.collider = "static";
    dirt.spriteSheet = sheetImg;
    dirt.addAni({ w:8, h:8, row: 0, col: 2});
    dirt.tile = 'd';
    
    dirt2 = new Group();
    dirt2.collider = "static";
    dirt2.spriteSheet = sheetImg;
    dirt2.addAni({ w:8, h:8, row: 0, col: 3});
    dirt2.tile = 'i';

    new Tiles(
        [
            '..........fff........',
            '..........fff........',
            'rggrgrggrgggrggrgrgrg',
            'rggrgrgrggrgrrgggggrr',
            'grgrgggrrrgrgggrgrgrg',
            'ddidididddiiiddididdd',

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

    sheep.rotation = 0;

    if (kb.pressing('left')) {
        sheep.vel.x = -1;
    }
    else if (kb.pressing('right')) {
        sheep.vel.x = 1;
        sheep.changeAni('right');
      
    }
    else {sheep.vel.x = 0;
    }

    if (kb.presses('up')) {
        sheep.vel.y = 6;
    }

    if (sheep.x >= 135) {
        score = score + 1;
        // kitty.changeAni('front');
        sheep.x = 10;
        sheep.y = 105;
    }

    if (sheep.y >= 105) {
        // kitty.changeAni('front');
        sheep.x = 10;
        sheep.y = 105;
    }

    if (score >= 5) {
        location.href = "index4.html"
    }
}

