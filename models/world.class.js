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
    collectedDaggers = 0;
    collectDaggerSound = new Audio('audio/collect-dagger.mp3');
    throwableObjects = [];
    canThrowDagger = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkThrowObjects();
    }

    checkCollisions() {
        setInterval(() => {
            // Prüfe Kollisionen mit Feinden
            this.level.enemies.forEach((enemy) => {

                this.throwableObjects.forEach((dagger) => {
                    if (dagger.isColliding(enemy) && !enemy.dead()) {
                        enemy.getHit();
                        // Optional: Entferne den Dolch nach der Kollision, wenn er den Gegner trifft
                        this.throwableObjects.splice(this.throwableObjects.indexOf(dagger), 1);
                        // console.log('Endboss HP:', this.endboss.hp);
                    }
                    
                    if (dagger.isColliding(this.endboss) && !this.endboss.dead() && !this.endboss.isHurt()) {
                        this.endboss.getHit();
                        this.statusBarBoss.setPercentage(this.endboss.hp);
                    }
                    
                    
                    
                });
                // Prüfe, ob der Charakter auf den Gegner springt
                if (this.character.jumpOnEnemy(enemy)) {
                    if (!enemy.dead()) {
                        this.character.jump();
                    }
                    enemy.getHit();
                }
                // Prüfe normale Kollision mit dem Gegner (von der Seite)
                else if (this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.isInAir() && !enemy.dead()) {
                    this.character.getHit();
                    this.statusBarChar.setPercentage(this.character.hp);
                    
                }
                
            });
        }, 1000 / 20);

        setInterval(() => {
            this.level.daggers.forEach((dagger) => {
                if (this.character.isColliding(dagger)) {
                    this.dagger.collect(dagger);
                    this.collectedDaggers++;
                    this.collectDaggerSound.play();
                }
            })
        }, 1000 / 60);

    }

    checkThrowObjects() {
        setInterval(() => {
            // Wenn die ENTER-Taste gedrückt wird und ein Dolch geworfen werden kann
            if (this.keyboard.ENTER && !this.character.dead() && this.canThrowDagger && this.collectedDaggers > 0) {
                let dagger = new ThrowableObject(this.character.positionX + 100, this.character.positionY);
                this.throwableObjects.push(dagger);
                this.canThrowDagger = false; // Verhindert das Werfen eines weiteren Dolches bis die Taste losgelassen wird
                this.collectedDaggers--;
            }

            // Wenn die ENTER-Taste losgelassen wird, setze canThrowDagger zurück
            if (!this.keyboard.ENTER) {
                this.canThrowDagger = true;
            }
        }, 1000 / 60); // Regelmäßig überprüfen, z.B. alle 16ms (60fps)
    }

    calculateDistance() {
        if (this.endboss && this.character) {  // Sicherstellen, dass world und character existieren
            return Math.abs(this.character.positionX - this.endboss.positionX);
        }
        return Infinity;  // Rückgabe eines Standardwerts, falls character noch nicht gesetzt ist
    }

    setWorld() {
        this.endboss.world = this;
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraPositionX, 0);
        this.level.backgroundObjects[0].positionX = -this.cameraPositionX;
        this.statusBarChar.positionX = -this.cameraPositionX;

        this.daggerCounter.positionX = -this.cameraPositionX + 50;

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
        this.addToMap(this.character);
        this.addToMap(this.endboss);

        this.drawDaggerCount();

        this.ctx.translate(-this.cameraPositionX, 0);


        //draw() wird immer wieder aufgerufen (so oft, wie die Grafikkarte erlaubt)
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawDaggerCount() {
        this.ctx.font = "20px Protest Guerrilla";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.collectedDaggers, this.daggerCounter.positionX + this.daggerCounter.width, this.daggerCounter.positionY + 20);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // NOTES!

    addToMap(movableObject) {

        if (movableObject.otherDirection) {
            this.turnImgOneEighty(movableObject);
        }

        // if (movableObject.nineZeroDegTurn) {
        //     this.turnImgNinety(movableObject);
        // }

        this.ctx.drawImage(movableObject.img, movableObject.positionX, movableObject.positionY, movableObject.width, movableObject.height);

        movableObject.drawFrame(this.ctx);

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

    // turnImgNinety(movableObject){
    //     this.ctx.save();
    //     this.ctx.translate(movableObject.width, 0);
    //     this.ctx.scale(-1, 1);
    //     movableObject.positionX = movableObject.positionX * -1;
    // }

    turnBackImg(movableObject) {
        movableObject.positionX = movableObject.positionX * -1;
        this.ctx.restore();
    }
}
