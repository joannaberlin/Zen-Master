class Game {
    constructor() {
        this.backgroundImages;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }

    preload() {
        this.backgroundImages = [
            loadImage('assets/background/background0.png'),
            loadImage('assets/background/background1.png'),
            loadImage('assets/background/background2.png'),
            loadImage('assets/background/background3.png'),
            loadImage('assets/background/background4.png')
        ];
        this.playerImage = loadImage('assets/player/monk-the-player.png');
        this.thought = loadImage('assets/thoughts/thought-cloud.png');
    }

    draw() {
        this.background.draw();
        this.player.draw();
        
        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.thought));
            console.log(this.obstacles);
        }
        // we iterate over the obstacles array and call their draw function for every obstacle 
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
        })
        // we use array filter to remove coins that collide with the player from the array
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
                return false;
            } else {
                return true
            }
            // obstacle.collision(this.player);
        })
    }

}
