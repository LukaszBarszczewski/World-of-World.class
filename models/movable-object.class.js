class MovableObject extends DrawableObject {
    speedX = 0.15;
    speedY = 0;
    acceleration = 0.7;
    otherDirection = false;
    hp = 100;
    lastHit = 0;
    breakBone = new Audio('audio/break-bone.mp3')
    zombieMoan = new Audio('audio/zombie-when-char-hitted.mp3');

    moveLeft() {
        if (this.notDeadOrHurt()) {
            this.positionX -= this.speedX;
            this.otherDirection = true;
        }
    }

    moveRight() {
        if (this.notDeadOrHurt()) {
            this.positionX += this.speedX;
            this.otherDirection = false;
            if (!this.isInAir()) {
                this.walkingSound.play();
            }
        }
    }

    jump() {
        if (!this.dead()) {
            this.speedY = 13;
        }
    }

    /**
     * Animates a sequence of images, looping through the array. Once the current image
     * reaches the last one, it resets to the first image to create a continuous animation.
     *
     * @param {string[]} images - Array of image paths to be animated.
     * @returns {void}
     */
    animateImages(images) {
        // sobald currentImg den höhsten Wert erreicht, bekommt es wieder der Wert 0, sodass die Funktion von vorne starten kann
        this.currentImg %= images.length;
        let i = this.currentImg;
        let path = images[i];    // currentImg ist von nun an die Position im array
        this.img = this.imageCache[path];   // die Variable img bekommt den Wert des path
        this.currentImg++;  //currentImg wird bei jedem Ausführen um 1 erhöht
    }

    /**
     * Applies gravity to the object, making it fall when in the air or moving upwards.
     * Continuously updates the position of the object based on its speed and acceleration.
     *
     * @returns {void}
     */
    applyGravity() {
        setInterval(() => {
            if (this.isInAir() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

     /**
     * Checks if the object is currently in the air. For throwable objects, always returns true.
     * For other objects, checks if the object is above a certain position (e.g., the ground level).
     *
     * @returns {boolean} - True if the object is in the air, false if on the ground.
     */
    isInAir() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.positionY < 190;
        }
    }

     /**
     * Checks if this object is colliding with another object. The collision is determined based
     * on the positions and dimensions of both objects.
     *
     * @param {Object} obj - The object to check for a collision with.
     * @param {number} obj.positionX - The X-coordinate of the other object.
     * @param {number} obj.positionY - The Y-coordinate of the other object.
     * @param {number} obj.width - The width of the other object.
     * @param {number} obj.height - The height of the other object.
     * @returns {boolean} - True if a collision is detected, false otherwise.
     */
    isColliding(obj) {
        return (this.positionX + (this.width * 0.5)) >= obj.positionX &&
            this.positionX <= (obj.positionX + (obj.width * 0.5)) &&
            (this.positionY + this.height) >= obj.positionY &&
            this.positionY <= (obj.positionY + obj.height);
        // obj.onCollisionCourse;  Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

     /**
     * Checks if this object is colliding with the boss specifically. The collision is determined
     * based on the positions and dimensions of both this object and the boss.
     *
     * @param {Object} obj - The boss object to check for a collision with.
     * @param {number} obj.positionX - The X-coordinate of the boss.
     * @param {number} obj.positionY - The Y-coordinate of the boss.
     * @param {number} obj.width - The width of the boss.
     * @param {number} obj.height - The height of the boss.
     * @returns {boolean} - True if a collision with the boss is detected, false otherwise.
     */
    isCollidingWithBoss(obj) {
        return this.positionX + (this.width * 0.1)>= obj.positionX &&
            this.positionX <= (obj.positionX + (obj.width * 0.1)) &&
            (this.positionY + this.height) >= obj.positionY &&
            this.positionY <= (obj.positionY + obj.height);
    }

    /**
     * Checks if the object has jumped on top of an enemy. This is determined by checking
     * if the object is in the air, falling, and colliding with an enemy from above.
     *
     * @param {Object} obj - The enemy object to check.
     * @param {number} obj.positionX - The X-coordinate of the enemy.
     * @param {number} obj.positionY - The Y-coordinate of the enemy.
     * @param {number} obj.width - The width of the enemy.
     * @param {number} obj.height - The height of the enemy.
     * @returns {boolean} - True if the object has successfully jumped on the enemy.
     */
    jumpOnEnemy(obj) {
        if (this.isInAir() && this.speedY <= 0) {  // Objekt muss fallen (speedY <= 0)
            // Überprüfen, ob das Objekt oberhalb des Gegners ist und eine Kollision vorliegt
            return this.positionY + this.height >= obj.positionY &&
                   this.positionY + (this.height * 0.5) < obj.positionY &&  // Muss sich oberhalb des Gegners befinden
                   this.positionX + (this.width * 0.1) >= obj.positionX &&
                   this.positionX <= obj.positionX + obj.width;
        }
        return false;
    }

    /**
     * Reduces the object's health by 20 units when it gets hit. If health drops below 0, 
     * it is reset to 0. Records the time of the last hit.
     *
     * @returns {void}
     */
    getHit() {
        this.hp -= 20;
        if (this.hp < 0) {
            this.hp = 0;
        } else {
            this.lastHit = new Date().getTime();    // Milisekunden, die seit dem 1.01.1970 vergangen sind
        }
    }

    /**
     * Checks if the object is still in a hurt state. This is determined by calculating the time
     * passed since the last hit. The object is considered hurt for 0.8 seconds after being hit.
     *
     * @returns {boolean} - True if the object is still hurt, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;   // Zeit zwischen jetzt und dem letzten Hit (in ms)
        timePassed = timePassed / 1000;     //in s
        return timePassed < 0.8;
    }

    dead() {
        return this.hp == 0;
    }

    
    notInAirDeadOrHurt() {
        if (!this.isInAir() && !this.dead() && !this.isHurt()) {
            return true;
        }
        return false;
    }

    notDeadOrHurt() {
        if (!this.dead() && !this.isHurt()) {
            return true;
        }
        return false;
    }

    hurtButNotDead() {
        if (this.isHurt() && !this.dead()) {
            return true;
        }
        return false;
    }
}
