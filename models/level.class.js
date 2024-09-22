class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 1720;

    constructor(enemies, clouds, backgroundObjects, daggers) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.daggers = daggers;
    }
}