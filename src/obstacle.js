class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * height);
        this.y = 0;
        this.width = 50;
        this.height = 50;
    }

    collision(playerInfo) {
        //console.log('collision', playerInfo);
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// measure the distance between obstacle and player using the dist() function
		// if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
		// 	//false;
		// } else {
		// 	// we have a collision
		// 	// increment score here
		// 	console.log('collision');
		// 	return 
		// 		//return this.score - 50;

		// 	//return true;
		// }
		//console.log(playerY, obstacleY);

		if ( Math.abs(obstacleX - playerX) < 50 && Math.abs(this.y - playerInfo.y) < 50) {
		//if ( Math.abs(obstacleX - playerX) < 155 && Math.abs(this.y - playerInfo.y) < 60) {
		
		//if ( Math.abs(obstacleX - playerX) < 155 && Math.abs(playerInfo.y - this.y - this.height) <= 0) {
			//change score here
			//player.score - 50;
		    
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
//if ( Math.abs(missileX - invaderX) < 25 && Math.abs(missileY - invaderY) < 25) {

//if collision happen than player.score - 50

//in Thought class => collision =>if condition with game.player.score += 30;


//(if collision happened than player.score)
//if player touches the thought than the score is -50
//