class Player {
    constructor() {
        this.velocity = 0;
		this.gravity = 0.2;
		this.width = 100;
		this.height = 140;
		this.x = 0;
		this.y = height - this.height;
        this.score = 1000;
    }

    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
			// we reset the y to it's starting position
			this.y = height - this.height;
		}
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

}


//

//score is here (if collision happened than player.score)
//in obstacle 