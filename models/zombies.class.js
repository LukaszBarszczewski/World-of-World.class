class Zombie extends MovableObject {
    hp = 20;
    otherDirection = true;

    /**
     * Creates an instance of Zombie.
     * 
     * @param {string} imgPath - The path to the initial image of the zombie.
     * @param {Array<string>} IMAGES_WALKING - An array of image paths for the walking animation.
     * @param {Array<string>} IMAGES_DYING - An array of image paths for the dying animation.
     */
    constructor(imgPath, IMAGES_WALKING, IMAGES_DYING) {
        super().loadImg(imgPath);

        this.IMAGES_WALKING = IMAGES_WALKING;
        this.IMAGES_DYING = IMAGES_DYING;

        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);

        this.positionX = 500 + Math.random() * 2800;
        this.speedX = this.speedX + Math.random() * 0.5;

        this.animate();

        addSoundToGlobalList(this.zombieMoan);
        addSoundToGlobalList(this.breakBone);
    }

     /**
     * Initiates the zombie's animation and movement.
     * 
     * Sets intervals for the zombie's movement to the left and for its death animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        let deathInterval = setInterval(() => {
            this.zombieMovesOrDies(deathInterval);
        }, 1000 / 60);
    }

    /**
     * Handles the zombie's movement or death based on its state.
     * 
     * @param {number} deathInterval - The interval ID for the death animation.
     */
    zombieMovesOrDies(deathInterval) {
        if (!this.dead()) {
            this.zombieMoves();
        } else {
            this.zombieDies(deathInterval);
        }
    }

     /**
     * Animates the zombie's walking animation.
     * 
     * If the current image index exceeds the walking image array length, it resets to 0.
     */
    zombieMoves() {
        this.animateImages(this.IMAGES_WALKING);

        if (this.currentImg >= this.IMAGES_WALKING.length) {
            this.currentImg = 0;
        }
    }

     /**
     * Handles the zombie's death animation.
     * 
     * Plays death sound effects and animates the dying sequence. 
     * Clears the death interval when the animation is complete.
     * 
     * @param {number} deathInterval - The interval ID for the death animation.
     */
    zombieDies(deathInterval) {
        this.animateImages(this.IMAGES_DYING);
        this.zombieMoan.play();
        this.breakBone.play();

        if (this.currentImg == this.IMAGES_DYING.length) {
            clearInterval(deathInterval);
        }
    }
}