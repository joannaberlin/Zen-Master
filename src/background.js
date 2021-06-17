class Background {
    draw() {

        if (frameCount < 1200) {
            image(game.backgroundImages[0], 0, 0, width, height);
        } else {
            image(game.backgroundImages[0], 0, 0, width, height);
            //game over
            //noLoop();
            //stopDraw();
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
        }
        if (game.score < 950) {
            noLoop();
            //show Game Over and some text
        }    
}
}




 // if (frameCount % 500 === 0 && player.score >= 900) {
        //     image(game.backgroundImages[1], 0, 0, width, height);
        // }
//check score: if (frameCount % 500 === 0) && player.score >= 900 {
//change background
//}

// if (frameCount % 500 === 0) {
//     if (this.score > 100) {
//         image(img.src, img.x, img.y, img.width, img.height)
//     }
//     if (this.score < 80) {
//         image(img.src, img.x, img.y, img.width, img.height)
//     }
// }

