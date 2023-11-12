let boy; floor; fence; wall; sock; gameboy; bottle;

function preload() {
    boy = new Sprite(55, 20, 17, 27);
    boy.spriteSheet = 'assets/BoySprite.png';
    boy.addAnis({
        front: { row: 0, frames: 4 },
        left:  { row: 1, frames: 4 },
        right: { row: 2, frames: 4 },
        back: { row: 3, frames: 4 },
    });
    boy.changeAni('front');
    boy.x = 10;
    boy.y = 60;
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    frameRate(30);
    allSprites.pixelPerfect = true;


    wall = new Sprite(80, 15, 160, 31);
    wall.img = 'assets/BedroomWallSprite.png';
    wall.collider = "static";

    shelf = new Sprite(20, 28, 40, 32);
    shelf.img = 'assets/BookshelfSprite.png'
    shelf.collider = "static";

    sock = new Sprite(150, 45, 12, 23);
    sock.img = 'assets/Sock.png';

    gameboy = new Sprite(-50, 60, 14, 19);
    gameboy.img = 'assets/Gameboy.png';
    
    bottle = new Sprite(-50, 130, 12, 21);
    bottle.img = 'assets/Bottle.png';
    
    bed1 = new Sprite(20, 107, 37, 55);
    bed1.img = 'assets/Bed1Sprite.png';
    bed1.collider = "static";

    bed2 = new Sprite(138, 107, 37, 55);
    bed2.img = 'assets/Bed2Sprite.png';
    bed2.collider = "static"; 

    floor = new Sprite(80, 150, 200, 10); {
    floor.color = 'lightgray';
    floor.collider = "static";
    }
    floorL = new Sprite(-6, 80, 10, 160); {
    floorL.color = 'lightgray';
    floorL.collider = "static";
    }
    floorR = new Sprite(181, 75, 40, 100); {
    floorR.color = 'lightgray';
    floorR.collider = "static";
    }
}

function draw() {
    clear();
    background(227, 193, 137)

    boy.rotation = 0;


    if (kb.pressing('left')){
        boy.vel.x = -1;
        boy.vel.y = 0;
        boy.changeAni('left');

    }
    else if (kb.pressing('right')) {
        boy.vel.x = 1;
        boy.vel.y = 0;
        boy.changeAni('right');

    }
    else if (kb.pressing('up')) {
        boy.vel.y = -1;
        boy.vel.x = 0;
        boy.changeAni('back');

    }
    else if (kb.pressing('down')) {
        boy.vel.y = 1;
        boy.vel.x = 0;
        boy.changeAni('front');

    }
    else {boy.vel.x = 0;
        boy.vel.y = 0;

    }

    if (boy.overlaps(sock)) {
        sock.remove();
        gameboy.x = 15;
    }
    if (boy.overlaps(gameboy)) {
        gameboy.remove();
        bottle.x = 110;
    }
    if (boy.overlaps(bottle)) {
        bottle.remove();
        location.href = "index7.html";
    }
}

