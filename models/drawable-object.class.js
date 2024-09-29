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

    collect(obj) {
        obj.positionX = -100;
    }

}