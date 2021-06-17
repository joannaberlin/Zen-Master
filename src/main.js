const game = new Game();
//let scoreElem;
let font,
fontsize = 40;

function preload() {
    font = loadFont('assets/font/BalooTammudu2-Medium.ttf');
    game.preload();
}

function setup() {
    createCanvas(800, windowHeight);
    game.setup();

    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);

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