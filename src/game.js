class Game {
    constructor() {
        this.backgroundImages;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacle = [];
    }

    preload() {
        this.backgroundImages = [
            {src: loadImage('/assets/background/background0.png')}
        ]
    }

    draw() {
    }

}
