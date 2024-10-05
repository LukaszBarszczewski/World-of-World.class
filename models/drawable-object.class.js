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

    /**
    * Loads a set of images and caches them for later use.
    * This method iterates over an array of image paths, creates new `Image` objects, 
    * and assigns their `src` property to the path. The images are then stored in the 
    * `imageCache` object for quick access later.
    * 
    * @param {string[]} array - An array of image paths (URLs) to be loaded and cached.
    * @returns {void}
    */
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