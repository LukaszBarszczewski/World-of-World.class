class DrawableObject {
    positionX = 50;
    positionY = 190;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImg = 0;


    loadImg(path) {
        this.img = new Image();     // JS-Abbildung von <img id="img"> (this.img = document.getElementById('img'))
        // this.img.id = id;
        this.img.src = path;
    }

    // lädt alle bilder der jeweiligen class nacheinander und pusht sie ins imageCache
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Zombie1 || this instanceof Zombie2 || this instanceof Dagger) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.positionX + 35, this.positionY + 30, this.width - 77, this.height - 52);
            ctx.stroke();
        }
    }

    collect(obj) {
        obj.positionX = -100;
    }

}