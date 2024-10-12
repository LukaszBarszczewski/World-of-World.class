let canvasStartScreen;
let canvasGame;
let world;
let keyboard = new Keyboard();
let mainMenuMusic = new Audio('audio/main-menu-and-boss-fight.mp3');
let inGameSoundtrack = new Audio('audio/soundtrack.mp3');
let failScreenMusic = new Audio('audio/fail-sound.mp3');
let winGameSound = new Audio('audio/win-game.mp3');


/**
 * Initializes the game, setting up the canvases for different game stages (start, fail, win screens)
 * and binding event listeners for mobile controls and buttons. It also draws the initial screen states.
 *
 * @returns {void}
 */
function init() {
    canvasStartScreen = document.getElementById('canvasStartScreen');
    canvasGame = document.getElementById('canvasGame');
    canvasFailScreen = document.getElementById('canvasFailScreen');
    canvasWinScreen = document.getElementById('canvasWinScreen');
    drawStartScreen();
    drawFailScreen();
    drawWinScreen();
    bindMobileButtons();
}

/**
 * Draws the start screen, displaying a message to prompt the player to press Enter to start the game.
 * Plays the main menu music.
 *
 * @returns {void}
 */
function drawStartScreen() {
    let ctx = canvasStartScreen.getContext('2d');
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasStartScreen.width, canvasStartScreen.height);

    ctx.fillStyle = "rgb(224, 150, 11)";
    ctx.font = "30px Cinzel";
    ctx.textAlign = "center";
    ctx.fillText("Press Enter (mobile: throw) to Start", canvasStartScreen.width / 2, canvasStartScreen.height / 2);
    mainMenuMusic.play();
}

/**
 * Draws the fail screen when the player loses, displaying a message and prompting the player to press Enter to retry.
 * Hides the fail screen initially and adds a fade-in animation effect.
 *
 * @returns {void}
 */
function drawFailScreen() {
    let ctx = canvasFailScreen.getContext('2d');
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasFailScreen.width, canvasFailScreen.height);

    ctx.fillStyle = "rgb(224, 150, 11)";
    ctx.font = "30px Cinzel";
    ctx.textAlign = "center";
    ctx.fillText("You Failed!", canvasFailScreen.width / 2, canvasFailScreen.height / 2.5);
    ctx.fillText("Press Enter to Try Again", canvasFailScreen.width / 2, canvasFailScreen.height / 1.5);
    canvasFailScreen.style.display = 'none';
    canvasFailScreen.classList.add('fade-in-scale');
}

/**
 * Draws the win screen when the player wins, displaying a congratulatory message and prompting the player to press Enter to replay.
 * Hides the win screen initially and adds a fade-in animation effect.
 *
 * @returns {void}
 */
function drawWinScreen() {
    let ctx = canvasWinScreen.getContext('2d');
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasWinScreen.width, canvasWinScreen.height);

    ctx.fillStyle = "rgb(224, 150, 11)";
    ctx.font = "30px Cinzel";
    ctx.textAlign = "center";
    ctx.fillText("You Won!", canvasWinScreen.width / 2, canvasWinScreen.height / 2.5);
    ctx.fillText("Press Enter to Play Again", canvasWinScreen.width / 2, canvasWinScreen.height / 1.5);
    canvasWinScreen.style.display = 'none';
    canvasWinScreen.classList.add('fade-in-scale');
}

/**
 * Handles keyboard events for movement and actions (e.g., right, left, jump, start). When Enter is pressed, 
 * the game stage is managed based on the current screen (start, fail, or win).
 *
 * @param {KeyboardEvent} event - The keyboard event triggered by pressing a key.
 * @returns {void}
 */
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 13) {
        keyboard.ENTER = true;
        if (canvasStartScreen.style.display !== "none" || canvasFailScreen.style.display !== "none" || canvasWinScreen.style.display !== "none") {
            manageGameStage();
        }
    }
});

/**
 * Handles the release of keyboard keys, stopping the respective movements or actions.
 *
 * @param {KeyboardEvent} event - The keyboard event triggered by releasing a key.
 * @returns {void}
 */
window.addEventListener('keyup', (event) => {
    if (event.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 13) {
        keyboard.ENTER = false;
    }
});

/**
 * Binds mobile controls for touch events. Handles movement (left, right), jumping, and throwing actions via touch inputs.
 * 
 * @returns {void}
 */
function bindMobileButtons() {
    document.getElementById('btnMoveLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    
    document.getElementById('btnMoveLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    
    document.getElementById('btnMoveRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    
    document.getElementById('btnMoveRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    
    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    
    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.ENTER = true;

        if (canvasStartScreen.style.display !== "none" || canvasFailScreen.style.display !== "none" || canvasWinScreen.style.display !== "none") {
            manageGameStage();
        }
    });
    
    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.ENTER = false;
    });
}

/**
 * Manages the transition between different game stages (e.g., from the start screen to the game). Initializes the game level,
 * stops the main menu music, starts the in-game soundtrack, and displays the game canvas while hiding the start/fail/win screens.
 *
 * @returns {void}
 */
function manageGameStage() {
    initLevel();
    mainMenuMusic.pause();
    inGameSoundtrack.play();
    if (canvasGame.style.display === 'none') {
        canvasStartScreen.style.display = 'none';
        canvasGame.style.display = 'block';
        canvasFailScreen.style.display = 'none';
        canvasWinScreen.style.display = 'none';
        failScreenMusic.pause();
        failScreenMusic.currentTime = 0;
    }
    // Starte die Spielwelt
    world = new World(canvasGame, keyboard);
}

/**
 * Triggers the fail screen when the game is lost. Stops the in-game soundtrack, resets its playback, and plays the fail screen music.
 * Displays the fail screen canvas and hides the game canvas.
 *
 * @returns {void}
 */
function gameOverFail() {
    if (canvasGame.style.display === 'block' && canvasStartScreen.style.display === 'none') {
        canvasGame.style.display = 'none';
        canvasFailScreen.style.display = 'block';
        inGameSoundtrack.pause();
        inGameSoundtrack.currentTime = 0;
        failScreenMusic.play();
    }
}

/**
 * Triggers the win screen when the game is won. Stops the in-game soundtrack, resets its playback, and plays the win game sound.
 * Displays the win screen canvas and hides the game canvas.
 *
 * @returns {void}
 */
function gameOverWin() {
    if (canvasGame.style.display === 'block' && canvasStartScreen.style.display === 'none') {
        canvasGame.style.display = 'none';
        canvasWinScreen.style.display = 'block';
        inGameSoundtrack.pause();
        inGameSoundtrack.currentTime = 0;
        winGameSound.play();
    }
}