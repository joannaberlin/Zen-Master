class Background {
    draw() {
        textAlign(CENTER);
        drawWords(width * 0.5);

        function drawWords(x) {
            fill(255, 255, 255);
            text('Game Over', x, 350);
        }

        if (frameCount < 1200) {
            image(game.backgroundImages[0], 0, 0, width, height);
        } else {
            image(game.backgroundImages[0], 0, 0, width, height);
        }
        if (frameCount >= 1200 && game.score >= 950) {  
            image(game.backgroundImages[1], 0, 0, width, height);     
        }
        if (frameCount >= 1700 && game.score >= 950) {
            image(game.backgroundImages[2], 0, 0, width, height); 
        }
        if (frameCount >= 2200 && game.score >= 950) {
            image(game.backgroundImages[3], 0, 0, width, height);
        }
        if (frameCount >= 2700 && game.score >= 950) {
            image(game.backgroundImages[4], 0, 0, width, height);
        }
        if (frameCount >= 3200 && game.score >= 950) {
            image(game.backgroundImages[5], 0, 0, width, height);
            stopDraw();
        }
    }
}

    

