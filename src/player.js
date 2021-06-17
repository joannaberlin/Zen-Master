class Player {
    constructor() {
        
        this.width = 110;
		this.height = 130;
		this.x = 0;
		this.y = height - this.height;
    
    }

    draw() {

    if (this.y >= height - this.height) {
        this.y = height - this.height;
    } 
    if (this.x >= width - this.width) {
        this.x = width - this.width;
    }
    if (this.y <= 0){
        this.y = 0;    
    }
    if (this.x <= 0){
        this.x = 0;
    }

    image(game.playerImage, this.x, this.y, this.width, this.height);
    
    }

    moveUp() {
        this.y -= 40;

    }

    moveDown() {
        this.y += 40;
    }

    moveRight() {
        this.x += 40;
    }

    moveLeft() {
        this.x -= 40;
    }
}


//

//score is here (if collision happened than player.score)
//in obstacle 