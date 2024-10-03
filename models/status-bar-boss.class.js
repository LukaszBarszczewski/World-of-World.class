class StatusBarBoss extends DrawableObject {
    IMAGES = [
        'img/status_bars/orange/0.png',
        'img/status_bars/orange/20.png',
        'img/status_bars/orange/40.png',
        'img/status_bars/orange/60.png',
        'img/status_bars/orange/80.png',
        'img/status_bars/orange/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.positionY = 0;
        this.width = 250;
        this.height = 60;
        this.setPercentage(100);
        console.log(this.world);
        
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