let boy; floor; fence; wall; coin; coin2; score = 0;

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
    boy.y = 105;
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
    allSprites.pixelPerfect = true;

    coin = new Sprite(80, 60, 10);
    coin.color = 'yellow';
    coin2 = new Sprite(80, 90, 10);
	coin2.color = 'yellow';

    wall = new Sprite(); { 
    wall.w = 200;
    wall.h = 32;
    wall.y = 10;
    wall.color = 'gray';
    wall.collider = "static";
    }
    
    bed = new Sprite(); {
    bed.w = 24;
    bed.h = 32;
    bed.y = 70;
    bed.x = 30;
    bed.color = 'tan';
    bed.collider = "static";
    }

    bed2 = new Sprite(); {
    bed2.w = 24;
    bed2.h = 32;
    bed2.y = 70;
    bed2.x = 130;
    bed2.color = 'tan';
    bed2.collider = "static";
    }
    
    floor = new Sprite(); {
    floor.x = 80;
    floor.y = 140;
    floor.width = 200;
    floor.height = 10;
    floor.color = 'lightgray';
    floor.collider = "static";
    }
}

function draw() {
    clear();

    boy.rotation = 0;

    if (kb.pressing('left')){boy.vel.x = -1;
        boy.changeAni('left');
    }
    else if (kb.pressing('right')) {boy.vel.x = 1;
        boy.changeAni('right');}
    else if (kb.pressing('up')) {boy.vel.y = -1;
        boy.changeAni('back');}
    else if (kb.pressing('down')) {boy.vel.y = 1;
        boy.changeAni('front');}
    else {boy.vel.x = 0;
        boy.vel.y = 0};

    if (boy.overlaps(coin)) {
    coin.remove();
    }
    if (boy.overlaps(coin2)) {
    coin2.remove();
    }

    

}
