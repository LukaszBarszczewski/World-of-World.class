class Character extends MovableObject {

    IMAGES_WALKING = [
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_006.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_007.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_008.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_009.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_010.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_011.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_012.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_013.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_014.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_015.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_016.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_017.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_018.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_019.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_020.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_021.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_022.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_023.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_000.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_001.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_002.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_003.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_004.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_005.png'
    ];

    IMAGES_JUMPING = [
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_005.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_004.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_003.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_002.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_001.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_000.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_001.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_002.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_003.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Jump Start/0_Fallen_Angels_Jump Start_004.png'
    ];

    IMAGES_DYING = [
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_000.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_001.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_002.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_003.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_004.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_005.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_006.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_007.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_008.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_009.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_010.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_011.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_012.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_013.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Dying/0_Fallen_Angels_Dying_014.png'
    ];

    IMAGES_HURTING = [
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_000.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_001.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_002.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_003.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_004.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_005.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_006.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_007.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_008.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_009.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_010.png',
        'img/main_char/Fallen_Angels_1/PNG/PNG Sequences/Hurt/0_Fallen_Angels_Hurt_011.png'
    ];

    world;
    speedX = 8;

    walkingSound = new Audio('audio/main-char-step.mp3');
    jumpingSound = new Audio('audio/jump.mp3');
    dyingSound = new Audio('audio/main-char-die.mp3');
    characterGetsHittedSound = new Audio('audio/char-gets-hit.mp3');
    soundPlayed = false;

    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            this.characterMoves();
            this.characterJumps();
            this.movingAnimations();
            this.characterGetsHurt();

            this.world.cameraPositionX = -this.positionX + 50;
        }, 1000 / 60);

        let deathInterval = setInterval(() => {
            this.characterDies(deathInterval);
        }, 1000 / 60);

        setInterval(() => {
            if (this.isInAir()) {
                this.animateImages(this.IMAGES_JUMPING);
            }
        }, 1000 / 20);
    }

    characterMoves() {
        if (this.world.keyboard.RIGHT && this.positionX < this.world.level.level_end_x + 50) {
            this.moveRight();
        }

        if (this.world.keyboard.LEFT && this.notDeadOrHurt()) {
            this.characterMovesLeft();
            this.otherDirection = true;
        }
    }

    characterMovesLeft() {
        if (this.positionX > 50) {
                this.moveLeft();
                if (!this.isInAir()) {
                    this.walkingSound.play();
                }
            }
    }

    characterJumps() {
        if (this.world.keyboard.SPACE && this.notInAirDeadOrHurt()) {
            this.jump();
            this.jumpingSound.play();
        }
    }

    movingAnimations() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.notInAirDeadOrHurt()) {
            this.animateImages(this.IMAGES_WALKING);
        }
    }

    characterGetsHurt() {
        if (this.hurtButNotDead()) {
            this.animateImages(this.IMAGES_HURTING);
            this.hurtSound()
            this.knockBack();
        } else {
            this.soundPlayed = false;
        }
    }

    hurtSound() {
        if (!this.soundPlayed) {
            this.characterGetsHittedSound.play();
            this.soundPlayed = true;
        }
    }

    knockBack() {
        if (this.positionX > 55) {
            this.positionX -= 15 - this.speedX;
        }
    }

    characterDies(deathInterval) {
        if (this.dead()) {
            this.animateImages(this.IMAGES_DYING);
            this.dyingSound.play();
            this.zombieMoan.play();
            if (this.currentImg == this.IMAGES_DYING.length) {
                clearInterval(deathInterval);
            }
            setTimeout(() => {
                gameOverFail();
            }, 2000);
        }
    }
}