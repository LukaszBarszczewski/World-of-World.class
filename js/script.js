let swordScrapeSound = new Audio('audio/sword-scrape.mp3');

function getGameRulesContent() {
    return `
        <section class="game-rules">
            <div class="game-rules-text">
                <span>It is time for you to save the fantasy world! <br><br>

                    Valeria – a strong and brave knight – has been tasked with stopping the undead invasion! <br>
                    She can only achieve this goal by defeating the great Zombie Leader. <br>
                    But be warned! The path to the final enemy is littered with his zombie army, and they won’t let you pass so easily. <br><br>

                    - Collect throwing daggers scattered all around <br><br>
                    - Fight the undead army by jumping on the zombies' heads <br><br>
                    - Defeat the Zombie Leader by throwing daggers at him and don’t let yourself get knocked down! <br><br>
                    
                    (Will you be able to collect all 8 daggers?)</span>

                <button class="btn close-game-rules-btn" onclick="closeGameRules()">
                    <h3>CLOSE</h3>
                </button>
            </div>
        </section>`;
}

function openGameRules() {
    let content = document.getElementById('content');
    content.insertAdjacentHTML('beforeend', getGameRulesContent());
    swordScrapeSound.play();
}

function closeGameRules() {
    let gameRules = document.querySelector('.game-rules');
    if (gameRules) {
        gameRules.remove();
    }
}