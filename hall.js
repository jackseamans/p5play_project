let hallRailing; floor, boy;

function preload() {
    sheetImg = loadImage("assets/Hall.png");
    boy = new Sprite(40, 20, 17, 27);
    boy.spriteSheet = 'assets/BoySprite.png';
    boy.addAnis({
        front: { row: 0, frames: 4 },
        left:  { row: 1, frames: 4 },
        right: { row: 2, frames: 4 },
        back: { row: 3, frames: 4 },
    });
    boy.changeAni('front');
    boy.x = 15;
    boy.y = 50;
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    frameRate(30);
    allSprites.pixelPerfect = true;

    hallRailing = new Sprite(62, 54, 124, 37);
    hallRailing.img = 'assets/HallRailing.png';
    hallRailing.collider = "static";

}

function draw() {
    clear();
    background(sheetImg);

    boy.rotation = 0;
    hallRailing.overlaps(boy);

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
    else {boy.vel.x = 0;
        boy.vel.y = 0;

    }

    if (boy.x >= 138) {
        boy.vel.x = 0;
        boy.ani.frame = 0;
    }

}