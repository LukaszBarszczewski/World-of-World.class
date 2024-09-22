class Dagger extends MovableObject {

    constructor(imgPath, x, y, width, height) {
        super().loadImg(imgPath);
        this.positionX = x;
        this.positionY = y;
        this.width = width;
        this.height = height;
    }
}