class Player {
    constructor() {
        
        this.width = 100;
		this.height = 120;
		this.x = 0;
		this.y = height - this.height;
        
        this.score = 1000;
    }

    draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
    
    }

    moveUp() {
        this.y -= 50;
    }

    moveDown() {
        this.y += 50;
    }

    moveRight() {
        this.x += 50;
    }

    moveLeft() {
        this.x -= 50;
    }

}


//

//score is here (if collision happened than player.score)
//in obstacle 