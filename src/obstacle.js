class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * height) / 2.5;;
        this.y = 0;
        this.width = 250;
        this.height = 250;
    }

    collision(playerInfo) {
        console.log('collision', playerInfo);
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// measure the distance between obstacle and player using the dist() function
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false;
		} else {
			// we have a collision
			// increment score here
			return true;
		}

	}

    draw() {
        // this.y--;
        // image(this.image, this.x, this.y, this.width, this.height);
        this.y++;
		image(this.image, this.x, this.y, this.width, this.height);
    }
}




//(if collision happened than player.score)
//if player touches the thought than the score is -50
//