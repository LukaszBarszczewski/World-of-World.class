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
    characterGetsHitSound = new Audio('audio/char-gets-hit.mp3');
    soundPlayed = false;

    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.applyGravity();
        this.animate();
        addSoundToGlobalList(this.jumpingSound);
        addSoundToGlobalList(this.walkingSound);
        addSoundToGlobalList(this.characterGetsHitSound);
        addSoundToGlobalList(this.dyingSound);
        addSoundToGlobalList(this.zombieMoan);
    }

    /**
    * Main animation loop for the character. 
    * This function runs multiple intervals to handle character movement, jumping, dying, and other animations.
    * It also updates the camera position based on the character's movement.
    * 
    * @returns {void}
    */
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
            this.jumpingAnimation();
        }, 1000 / 20);
    }

    /**
    * Handles character movement based on keyboard input.
    * Moves the character to the right or left when the corresponding key is pressed.
    * It also checks if the character is dead or hurt to prevent movement in such states.
    * 
    * @returns {void}
    */
    characterMoves() {
        if (this.world.keyboard.RIGHT && this.positionX < this.world.level.level_end_x + 50) {
            this.moveRight();
        }

        if (this.world.keyboard.LEFT && this.notDeadOrHurt()) {
            this.characterMovesLeft();
            this.otherDirection = true;
        }
    }

    /**
    * Plays the jumping animation when the character is in the air.
    * It checks if the character is currently in the air and switches to the jumping animation images.
    * 
    * @returns {void}
    */
    jumpingAnimation() {
        if (this.isInAir()) {
            this.animateImages(this.IMAGES_JUMPING);
        }
    }

    /**
    * Moves the character to the left if the left arrow key is pressed and the character is not dead or hurt.
    * It also plays a walking sound if the character is on the ground.
    * 
    * @returns {void}
    */
    characterMovesLeft() {
        if (this.positionX > 50) {
            this.moveLeft();
            if (!this.isInAir()) {
                this.walkingSound.play();
            }
        }
    }

    /**
    * Makes the character jump if the SPACE key is pressed and the character is not in the air, dead, or hurt.
    * This function plays the jump sound and triggers the jump animation.
    * 
    * @returns {void}
    */
    characterJumps() {
        if (this.world.keyboard.SPACE && this.notInAirDeadOrHurt()) {
            this.jump();
            this.jumpingSound.play();
        }
    }

    /**
    * Plays the walking animation when the character is moving left or right, and is not in the air, dead, or hurt.
    * It switches between the walking image sequence to simulate movement.
    * 
    * @returns {void}
    */
    movingAnimations() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.notInAirDeadOrHurt()) {
            this.animateImages(this.IMAGES_WALKING);
        }
    }

    /**
    * Plays the hurt animation when the character is hit but not dead.
    * It also triggers the sound for getting hit and applies a knockback effect.
    * 
    * @returns {void}
    */
    characterGetsHurt() {
        if (this.hurtButNotDead()) {
            this.animateImages(this.IMAGES_HURTING);
            this.hurtSound();
            this.knockBack();
        } else {
            this.soundPlayed = false;
        }
    }

    hurtSound() {
        if (!this.soundPlayed) {
            this.characterGetsHitSound.play();
            this.soundPlayed = true;
        }
    }

    knockBack() {
        if (this.positionX > 55) {
            this.positionX -= 15 - this.speedX;
        }
    }

    /**
    * Plays the death animation and sound when the character dies.
    * The death animation is looped, and once it completes, the game over logic is triggered.
    * It clears the death interval once the animation finishes.
    * 
    * @param {number} deathInterval - The interval for the death animation which will be cleared when the character dies.
    * @returns {void}
    */
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