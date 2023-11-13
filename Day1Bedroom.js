let boy; floor; fence; wall; brother; exPoint; chat; arrow;

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

    exPoint = new Sprite(105, 93, 16, 16);
    exPoint.img = "assets/Point.png"


    wall = new Sprite(80, 15, 160, 31);
    wall.img = 'assets/BedroomWallSprite.png';
    wall.collider = "static";

    shelf = new Sprite(20, 28, 40, 32);
    shelf.img = 'assets/BookshelfSprite.png'
    shelf.collider = "static";
    
    chat = new Sprite(-100, 34, 117, 56);
    chat.img = 'assets/Chat.png'
    chat.collider = "static";
    chat.overlaps(wall);

    arrow = new Sprite(-200, -200, 46, 20)
    arrow.img = "assets/Hour.png"
    arrow.overlaps(wall);
    arrow.collider = "static";

    bed1 = new Sprite(20, 107, 37, 55);
    bed1.img = 'assets/Bed1Sprite.png';
    bed1.collider = "static";

    bed2 = new Sprite(138, 107, 37, 55);
    bed2.img = 'assets/Bed2Sprite.png';
    bed2.collider = "static"; 
    
    brother = new Sprite(105, 120, 17, 28); 
    brother.img = "assets/BrotherL.png";
    brother.collider = "static";

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

    

    if (boy.x >= 80 && boy.x <= 115 && boy.y >= 115 && boy.y <= 150) {
        // fill(200);
        // rect(50, 150, 100, 100); 
        // fill(0)
        // textSize(12);
        // textAlign(CENTER, CENTER);
        // text('To Kitchen ->', 120, 40);
        floorR.y = 140;
        chat.y = 62;
        chat.x = 76;
        exPoint.y = 600;
        arrow.y = 27;
        arrow.x = 120;

    }
    else {
        chat.y = -100;
        }

    if (boy.x >= 175) {
        location.href = "index2.html"
    }


}
