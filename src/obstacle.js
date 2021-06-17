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
		//if ( Math.abs(obstacleX - playerX) < 40 && Math.abs(this.y - playerInfo.y) < 40) {
			//change score here
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

//if collision happen than player.score - 50

//in Thought class => collision =>if condition with game.player.score += 30;
