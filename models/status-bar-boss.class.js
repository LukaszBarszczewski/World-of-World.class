class StatusBarBoss extends DrawableObject {
    IMAGES = [
        'img/status_bars/green/0.png',
        'img/status_bars/green/20.png',
        'img/status_bars/green/40.png',
        'img/status_bars/green/60.png',
        'img/status_bars/green/80.png',
        'img/status_bars/green/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.positionY = 0;
        this.positionX = 1150;
        this.width = 250;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}