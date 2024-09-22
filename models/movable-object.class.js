class MovableObject extends DrawableObject {
    speedX = 0.15;
    speedY = 0;
    acceleration = 0.7;
    otherDirection = false;
    nineZeroDegTurn = false;
    hp = 100;
    lastHit = 0;
    zombieMoan = new Audio('audio/zombie-when-char-hitted.mp3');
    breakBone = new Audio('audio/break-bone.mp3')


    moveLeft() {
        if (!this.dead()) {
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

    animateImages(images) {
        // sobald currentImg den höhsten Wert erreicht, bekommt es wieder der Wert 0, sodass die Funktion von vorne starten kann
        this.currentImg %= images.length;
        let i = this.currentImg;
        let path = images[i];    // currentImg ist von nun an die Position im array
        this.img = this.imageCache[path];   // die Variable img bekommt den Wert des path
        this.currentImg++;  //currentImg wird bei jedem Ausführen um 1 erhöht
    }

    applyGravity() {
        setInterval(() => {
            if (this.isInAir() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    isInAir() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.positionY < 190;
        }
    }

    isColliding(obj) {
        return (this.positionX + (this.width * 0.5)) >= obj.positionX &&
            this.positionX <= (obj.positionX + (obj.width * 0.5)) &&
            (this.positionY + this.height) >= obj.positionY &&
            this.positionY <= (obj.positionY + obj.height);
        // obj.onCollisionCourse;  Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    jumpOnEnemy(obj) {
        if (this.isInAir()) {
            return this.positionY + this.height >= obj.positionY &&
                this.positionY <= obj.positionY + obj.height &&
                this.positionX + (this.width * 0.1) >= obj.positionX &&
                this.positionX <= obj.positionX + (obj.width);
        }
    }

    getHit() {
        this.hp -= 20;
        if (this.hp < 0) {
            this.hp = 0;
        } else {
            this.lastHit = new Date().getTime();    //Milisekunden, die seit dem 1.01.1970 vergangen sind
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;   //Zeit zwischen jetzt und dem letzten Hit (in ms)
        timePassed = timePassed / 1000;     //in s
        return timePassed < 0.5;
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
}
