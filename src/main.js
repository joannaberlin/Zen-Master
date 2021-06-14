const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    bg = loadImage('assets/background/background0.png');
    createCanvas(800, 800);
    game.setup();
}

function draw() {
    background(bg);
    game.draw();
}

function keyPressed() {}