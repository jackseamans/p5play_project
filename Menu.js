function preload() {
    menu = loadImage("assets/Menu.png" );
}

function setup() {
    new Canvas(160, 144, 'pixelated x4');
}

function draw() {
    image(menu, 0, 0);

    if (kb.presses('Enter')) {
        location.href = "index1.html";
    }
}

