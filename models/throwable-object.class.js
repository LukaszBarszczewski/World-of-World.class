class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImg('img/throwable_dagger/Dagger-throw.png');
        this.positionX = x;
        this.positionY = y;
        this.width = 55;
        this.height = 30;
        this.throw();
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.positionX += 15;
        }, 25);
    }
}