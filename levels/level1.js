let level1;
function initLevel() {
    level1 = new Level(
        [
            new Zombie1('img/zombie/Zombie_Villager_1/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png'),
            new Zombie1('img/zombie/Zombie_Villager_1/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png'),
            new Zombie1('img/zombie/Zombie_Villager_1/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png'),
            new Zombie2('img/zombie/Zombie_Villager_2/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png'),
            new Zombie2('img/zombie/Zombie_Villager_2/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png'),
            new Zombie2('img/zombie/Zombie_Villager_2/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png')
        ],

        [
            new Cloud('img/clouds/1.png', 0, 0, 720, 90),
            new Cloud('img/clouds/1.png', 720, 0, 720, 90),
            new Cloud('img/clouds/1.png', 1440, 0, 720, 90),
            new Cloud('img/clouds/1.png', 2160, 0, 720, 90),
            new Cloud('img/clouds/1.png', 2880, 0, 720, 90),
            new Cloud('img/clouds/1.png', 3600, 0, 720, 90),
            new Cloud('img/clouds/1.png', 4320, 0, 720, 90),
            new Cloud('img/clouds/1.png', 5040, 0, 720, 90),
            new Cloud('img/clouds/1.png', 5760, 0, 720, 90),
            new Cloud('img/clouds/1.png', 6580, 0, 720, 90),
            new Cloud('img/clouds/1.png', 7300, 0, 720, 90),
            new Cloud('img/clouds/1.png', 8020, 0, 720, 90),
            new Cloud('img/clouds/1.png', 8740, 0, 720, 90)
        ],

        [
            new BackgroundObject('img/backgrounds/PNG/1/sea.png', 0, 0, 720, 480),
            new BackgroundObject('img/backgrounds/PNG/1/bridge.png', 0, 160, 720, 315),
            new BackgroundObject('img/backgrounds/PNG/1/bamboo.png', 0, 80, 720, 400),
            new BackgroundObject('img/backgrounds/PNG/1/bridge.png', 700, 160, 720, 315),
            new BackgroundObject('img/backgrounds/PNG/1/bamboo.png', 700, 80, 720, 400),
            new BackgroundObject('img/backgrounds/PNG/1/bridge.png', 1400, 160, 720, 315),
            new BackgroundObject('img/backgrounds/PNG/1/bamboo.png', 1400, 80, 720, 400),
            new BackgroundObject('img/backgrounds/PNG/1/bridge.png', 2100, 160, 720, 315),
            new BackgroundObject('img/backgrounds/PNG/1/bamboo.png', 2100, 80, 720, 400)
        ],

        [
            new Dagger('img/throwable_dagger/Dagger.png', 250, 270, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 500, 100, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 600, 20, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 750, 150, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 880, 10, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 950, 15, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 1000, 100, 25, 35),
            new Dagger('img/throwable_dagger/Dagger.png', 1250, 150, 25, 35)
        ]
    );
}
// TO-DO: die Elemente spiegeln, sodass die Schweißnaht evtl. nicht zu sehen ist
