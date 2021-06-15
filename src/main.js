const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(1000, windowHeight);
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    if (keyCode === 32) {
		game.player.jump();
	} 
}