class Background {
    draw() {
        
        //image(game.backgroundImages[0], 0, 0, width, height);

        if (frameCount < 1000) {
            image(game.backgroundImages[0], 0, 0, width, height);
        } 
        if (frameCount >= 1000) {
            image(game.backgroundImages[1], 0, 0, width, height);     
        }
        if (frameCount >= 1500) {
            image(game.backgroundImages[2], 0, 0, width, height); 
        }
        if (frameCount >= 2000) {
            image(game.backgroundImages[3], 0, 0, width, height);
        }
        if (frameCount >= 2500) {
            image(game.backgroundImages[4], 0, 0, width, height);
        }

        // if (frameCount % 500 === 0 && player.score >= 900) {
        //     image(game.backgroundImages[1], 0, 0, width, height);
        // }
}
}
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

