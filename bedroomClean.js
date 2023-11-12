let boy;
let coins = [];
let score = 0;

function setup() {
  new Canvas(160, 144, 'pixelated x 4');
  boy = createSprite(10, 10, 10, 10);

  for (let i = 0; i < 3; i++) {
    let coin = createSprite(random(10, 150), random(10, 130), 20);
    coin.color = 'gold';
    coin.text = "| |"
    coins.push(coin);
  }
}

function draw() {
  clear();
  text(score, 20, 20);
  
  if (kb.pressing('left')){
        boy.vel.x = -2;
        boy.vel.y = 0;
        
    }
    else if (kb.pressing('right')) {
        boy.vel.x = 2;
        boy.vel.y = 0;
        
    }
    else if (kb.pressing('up')) {
        boy.vel.y = -2;
        boy.vel.x = 0;

    }
    else if (kb.pressing('down')) {
        boy.vel.y = 2;
        boy.vel.x = 0;

    }
    else {boy.vel.x = 0;
        boy.vel.y = 0;
    }
  
  for (let i = coins.length - 1; i >= 0; i--) {
    if (boy.overlap(coins[i])) {
      coins[i].remove();
      score = score + 1;
    }

    if (score >= 1) {
      text('Nice!', 50, 50);
    }
    if (score >= 2) {
      text('Woah!', 50, 70);
    }
    if (score >= 3) {
      text('Cool!', 30, 30);
    }
  }
  
}