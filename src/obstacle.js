class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * height);
        this.y = 0;
        this.width = 60;
        this.height = 60;
    }

    collision(playerInfo) {
		const obstacleX = this.x + this.width / 2;
		const playerX = playerInfo.x + playerInfo.width / 2;

		if ( Math.abs(obstacleX - playerX) < 40 && Math.abs(this.y - playerInfo.y) < 70) {
			game.score -= 50;
		    console.log(game.score);
			return true 
		} else {
			return false
		}
	}

    draw() { 
        this.y++;
		image(this.image, this.x, this.y, this.width, this.height);
    }
}