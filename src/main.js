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
    if (keyCode === 38) {
		game.player.moveUp();
	}
    if (keyCode === 40) {
		game.player.moveDown();
	} 
    if (keyCode === 37) {
		game.player.moveLeft();
	} 
    if (keyCode === 39) {
		game.player.moveRight();
	}  

}