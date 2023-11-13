let boy;
let floor; 
let fence;
let score = 0;

function preload() {
    sheetImg = loadImage("assets/Tiles-and-Enemies.png" );
    sky = loadImage("assets/NightSky.gif");
    boy = new Sprite(55, 20, 17, 27);
    boy.spriteSheet = 'assets/BoySprite.png';
    boy.anis.frameDelay = 8;
    boy.addAnis({
        front: { row: 0, frames: 4 },
        left:  { row: 1, frames: 4 },
        right: { row: 2, frames: 4 },
        back: { row: 3, frames: 4 },
    });
    boy.changeAni('right');
    boy.x = 15;
    boy.y = 115;
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');

    world.gravity.y = 6;

    boy.friction = 0;

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
            

            'ggggggggggggggggggggg....................',
            'ggggggggggggggggggggggggggggg............',
            '.........................................',
            '................................ddddddddd',
            '................................ddddddddd',
            '................................ddddddddd',
            '............................ddddddddddddd',
            '............................ddddddddddddd',
            '.....ff......ff.........ddddddddddddddddd',
            '.....ff......ff.........ddddddddddddddddd',
            'ddddddddddddddddddddddddddddddddddddddddd',

        ],
        0, 70, // x, y
        8, 8 // w, h
    );


}

function draw() {
    image(sky, 0, 0);


    boy.rotation = 0;

    if (kb.pressing('left')){
        boy.vel.x = -1;
        boy.changeAni('left');

    }
    else if (kb.pressing('right')) {
        boy.vel.x = 1;
        boy.changeAni('right');

    }
    else {
        boy.vel.x = 0;

    }

    if (kb.presses('up')) {
        boy.vel.y = -2;

    }
    

    camera.x = boy.x + 32;
    camera.y = boy.y - 30;

    if (score >= 5) {
        location.href = "index4.html"
    }
}

