const game = new Game();
//let scoreElem;

function preload() {
    game.preload();
}

function setup() {
    createCanvas(800, windowHeight);
    game.setup();

    // scoreElem = createDiv('Score = 0');
    // scoreElem.position(30, 30);
    // scoreElem.id = 'score';
    // scoreElem.style('color', 'pink');
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

// function checkGameStatus() {
//     if (game.score < 950) {
//       noLoop();
//       //const scoreVal = parseInt(scoreElem.html().substring(8));
//       //scoreElem.html('Game ended! Your score was : ' + scoreVal);
//     }
// }