class Cloud extends MovableObject {
    constructor(imgPath, x, y, width, height) {
        super().loadImg(imgPath);
        this.positionX = x;
        this.positionY = y;
        this.width = width;
        this.height = height;

        this.animate();
    }

    animate() {
        // Bewegt die Wolke kontinuierlich nach links
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);  // 60 FPS - Wolke bewegt sich kontinuierlich nach links
    }
}