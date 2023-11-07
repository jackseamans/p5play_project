let boy; floor; fence; wall; brother; coin; coin2; coinCount = 0;

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

    coin = new Sprite(80, 60, 10);
    coin.color = 'yellow';
    
    coin2 = new Sprite(35, -20, 60, 25);
    coin2.textSize = 10;
    coin2.text = "Dinner time!";
	coin2.color = 'blue';
    coin2.collider = "static";
    
    bed1 = new Sprite(20, 107, 37, 55);
    bed1.img = 'assets/Bed1Sprite.png';
    bed1.collider = "static";

    bed2 = new Sprite(138, 107, 37, 55);
    bed2.img = 'assets/Bed2Sprite.png';
    bed2.collider = "static"; 
    
    brother = new Sprite(105, 120, 17, 27); 
    brother.collider = "static";

    floor = new Sprite(80, 150, 200, 10); {
    floor.color = 'lightgray';
    floor.collider = "static";
    }
    floorL = new Sprite(-6, 80, 10, 160); {
    floorL.color = 'lightgray';
    floorL.collider = "static";
    }
    floorR = new Sprite(161, 75, 40, 100); {
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

    if (boy.overlaps(coin)) {
        coin.remove();
        // fill(200);
        // rect(50, 150, 100, 100); 
        // fill(0)
        // textSize(12);
        // textAlign(CENTER, CENTER);
        // text('Please Stay', 72, 50);
    }

    if (boy.x >= 80 && boy.x <= 115 && boy.y >= 85 && boy.y <= 150) {
        fill(200);
        rect(50, 150, 100, 100); 
        fill(0)
        textSize(12);
        textAlign(CENTER, CENTER);
        text('To Kitchen ->', 90, 40);
        floorR.y = 115;
        coin2.y = 15;
        coin2.x = 35;
    }
    else {coin2.y = -20}

    if (boy.x >= 175) {
        location.href = "index2.html"
    }


}
