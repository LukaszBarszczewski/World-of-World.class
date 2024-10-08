class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraPositionX = 0;
    statusBarChar = new StatusBarChar();
    statusBarBoss = new StatusBarBoss();
    dagger = new Dagger();
    daggerCounter = new DaggerCounter();
    availableDaggers = 0;
    collectedDaggers = 0;
    collectDaggerSound = new Audio('audio/collect-dagger.mp3');
    allDaggersCollectedSound = new Audio('audio/all-daggers-collected.mp3');
    throwingDaggerSound = new Audio('audio/throwing-dagger.mp3');
    throwableObjects = [];
    canThrowDagger = true;

    /**
     * Creates a new instance of the game world.
     * 
     * @param {HTMLCanvasElement} canvas - The canvas element where the game world is drawn.
     * @param {Object} keyboard - The object that captures keyboard inputs.
     * 
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkThrowObjects();
        addSoundToGlobalList(this.collectDaggerSound);
        addSoundToGlobalList(this.allDaggersCollectedSound);
        addSoundToGlobalList(this.throwingDaggerSound);
    }

    /**
     * Checks for collisions in the game world, including collisions with enemies and collectible daggers.
     * This function is executed at regular intervals.
     * 
     */
    checkCollisions() {
        setInterval(() => {
            this.collisionsWithEnemies();
        }, 1000 / 20);

        setInterval(() => {
            this.collectDaggers();
        }, 1000 / 60);
    }

    /**
     * Collects daggers by checking if the character collides with any daggers in the level.
     * 
     */
    collectDaggers() {
        this.level.daggers.forEach((dagger) => {
            this.increaseAmountOfDaggers(dagger);
        });
    }

    /**
     * Increases the number of available and collected daggers if the character collects a dagger.
     * 
     * @param {Object} dagger - The dagger object to be collected.
     * 
     */
    increaseAmountOfDaggers(dagger) {
        if (this.character.isColliding(dagger)) {
            this.dagger.collect(dagger);
            this.availableDaggers++;
            this.collectedDaggers++;
            this.collectDaggerSound.play();
            if (this.collectedDaggers === 13) {
                this.allDaggersCollectedSound.play();
            }
        }
    }

    /**
     * Handles the behavior when the character or throwable objects collide with enemies or the final boss.
     * 
     */
    collisionsWithEnemies() {
        this.level.enemies.forEach((enemy) => {

            this.throwableObjects.forEach((dagger) => {
                this.daggerHitAbility(dagger, enemy);
            });

            this.characterCollisionBehavior(enemy);
        });
    }

    /**
     * Checks if a dagger hits an enemy or the final boss and applies damage if necessary.
     * 
     * @param {Object} dagger - The dagger being thrown.
     * @param {Object} enemy - The enemy or boss to check for collision.
     * 
     */
    daggerHitAbility(dagger, enemy) {
        if (dagger.isColliding(enemy) && !enemy.dead()) {
            this.daggerHitsZombie(enemy, dagger);
        }

        else if (dagger.isColliding(this.endboss) && !this.endboss.dead() && !this.endboss.isHurt()) {
            this.daggerHitsEndboss(dagger);
        }
    }

    characterCollisionBehavior(enemy) {
        if (this.character.jumpOnEnemy(enemy)) {
            this.characterBounce(enemy);
        }

        else if (this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.isInAir() && !enemy.dead()) {
            this.characterGetsHurt();
        }

        else if (this.character.isCollidingWithBoss(this.endboss) && !this.character.isHurt() && !this.endboss.dead()) {
            this.characterGetsHurt();
        }
    }

    daggerHitsZombie(enemy, dagger) {
        enemy.getHit();
        this.throwableObjects.splice(this.throwableObjects.indexOf(dagger), 1);
    }

    daggerHitsEndboss(dagger) {
        this.endboss.getHit();
        this.throwableObjects.splice(this.throwableObjects.indexOf(dagger), 1);
        this.statusBarBoss.setPercentage(this.endboss.hp);
    }

    characterBounce(enemy) {
        if (!enemy.dead()) {
            this.character.jump();
        }
        enemy.getHit();
    }

    characterGetsHurt() {
        this.character.getHit()
        this.statusBarChar.setPercentage(this.character.hp);
    }

    /**
     * Throws a dagger if the conditions are met, such as the character not being dead and there being daggers available.
     * 
     */
    checkThrowObjects() {
        setInterval(() => {
            if (this.keyboard.ENTER && !this.character.dead() && this.canThrowDagger && this.availableDaggers > 0) {
                this.throwDagger();
            }

            if (!this.keyboard.ENTER && this.availableDaggers > 0) {
                this.canThrowDagger = true;
            }
        }, 1000 / 60);
    }

    /**
     * Throws a dagger from the character's current position, reducing the number of available daggers.
     * 
     */
    throwDagger() {
        let dagger = new ThrowableObject(this.character.positionX + 100, this.character.positionY);
        this.throwableObjects.push(dagger);
        this.canThrowDagger = false; // Verhindert das Werfen eines weiteren Dolches bis die Taste losgelassen wird
        this.availableDaggers--;
        this.throwingDaggerSound.play();
    }

    calculateDistance() {
        if (this.endboss && this.character) {  // Sicherstellen, dass endboss und character existieren
            return Math.abs(this.character.positionX - this.endboss.positionX);
        }
        return Infinity;  // Rückgabe eines Standardwerts, falls character noch nicht gesetzt ist
    }

    setWorld() {
        this.endboss.world = this;
        this.character.world = this;
        this.statusBarBoss.world = this;
    }

    /**
     * Draws all game objects, such as the character, enemies, and background, onto the canvas.
     * This function is called repeatedly for rendering the game world.
     * 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraPositionX, 0);
        this.level.backgroundObjects[0].positionX = -this.cameraPositionX;
        this.statusBarChar.positionX = -this.cameraPositionX;

        this.daggerCounter.positionX = -this.cameraPositionX + 50;

        this.statusBarBoss.positionX = this.endboss.positionX + 100;

        //die Reihenfolge der hinzuzufügenden Objekte ist entscheidend - diese Funktion wird mehmals pro Sekunde aufgerufen
        // und die Objekte Schicht für Schicht gezeichnet, was dazu führt, dass z.B. das zweite Objekt über das erste drüber gezeichnet wird
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.daggers);
        this.addToMap(this.statusBarChar);
        this.addToMap(this.statusBarBoss);
        this.addToMap(this.daggerCounter);
        this.addToMap(this.endboss);
        this.addToMap(this.character);

        this.drawDaggerCount();

        this.ctx.translate(-this.cameraPositionX, 0);


        //draw() wird immer wieder aufgerufen (so oft, wie die Grafikkarte erlaubt)
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Draws the number of available daggers on the canvas.
     * 
     */
    drawDaggerCount() {
        this.ctx.font = "20px Protest Guerrilla";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.availableDaggers, this.daggerCounter.positionX + this.daggerCounter.width, this.daggerCounter.positionY + 20);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(movableObject) {

        if (movableObject.otherDirection) {
            this.turnImgOneEighty(movableObject);
        }

        this.ctx.drawImage(movableObject.img, movableObject.positionX, movableObject.positionY, movableObject.width, movableObject.height);

        if (movableObject.otherDirection) {
            this.turnBackImg(movableObject);
        }
    }

    turnImgOneEighty(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.positionX = movableObject.positionX * -1;
    }

    turnBackImg(movableObject) {
        movableObject.positionX = movableObject.positionX * -1;
        this.ctx.restore();
    }
}
