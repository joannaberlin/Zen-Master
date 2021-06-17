class Game {
    constructor() {
        this.backgroundImages;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
        this.score = 1000;
    }

    preload() {
        this.backgroundImages = [
            loadImage('assets/background/background0.png'),
            loadImage('assets/background/background1.png'),
            loadImage('assets/background/background2.png'),
            loadImage('assets/background/background3.png'),
            loadImage('assets/background/background4.png'),
            loadImage('assets/background/background5.png')
        ];
        this.playerImage = loadImage('assets/player/monk-the-player.png');
        this.thought = loadImage('assets/thoughts/thought-cloud.png');
    }

    draw() {
        
        this.background.draw();
        this.player.draw();
        
        
        if (frameCount % 40 === 0) {
            this.obstacles.push(new Obstacle(this.thought));
            
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
        })
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player) || (obstacle.y > windowHeight)) {
                return false;
            } else {
                return true;
            }
        })   
    }
}
