var FunUserAgent = function() {
    let userAgents = [
        'Mozilla/5.0 (Planet Earth; Milky Way; Universe Infinity) Chrome/999.0.0.0 Safari/537.36',
        'CyberDuck/007 (Like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'NinjaBrowser/3.3.3 (Ninjutsu OS; Shuriken Edition) Firefox/69.0',
        'AlienTech/42.0 (Area 51; Secret OS) Edge/18.17763',
        'PirateExplorer/1.0 (The Seven Seas; YoHoHo) Safari/537.36',
        'TimeTraveler/88 (Flux Capacitor; Delorean) Opera/64.0.3417.47',
        'ZombieBrowser/13.13 (Undead OS; Brainzzz) Chrome/78.0.3904.70',
        'MagicBeanstalk/5.5 (Giant`s Cloud; BeanOS) Firefox/70.0',
        'SuperHero/1.0 (Krypton; SuperOS) Edge/19.18262',
        'WizardWeb/7.7 (Hogwarts; SpellCaster 1.0) Chrome/79.0.3945.16',
        'GhostlySpectator/2.0 (Haunted Mansion; BooOS) Safari/605.1.15',
        'DragonFire/6.6 (Mythical Lands; ScaleOS) Opera/65.0.3467.38',
        'GoblinTech/3.3 (Dungeon Depths; GoblinOS) Firefox/71.0',
        'VikingNavigator/1.1 (Valhalla; MeadBrowser) Edge/20.19008',
        'MermaidWaves/4.4 (Atlantis; AquaOS) Chrome/80.0.3987.87',
        'SpaceOdyssey/2001 (Jupiter Mission; HAL) Safari/13.0',
        'PenguinSurfer/0.99 (Antarctica; IcebergOS) Firefox/72.0',
        'CouchPotato/5.0 (Living Room; SnackOS) Opera/66.0.3515.27',
        'YetiFootprints/8.8 (Himalayas; SnowOS) Chrome/81.0.4044.92',
        'RetroGamer/2.6 (Arcade Cabinet; 8bitOS) Edge/21.20009',
        'UnicornSparkle/9.9 (Rainbow Land; GlitterOS) Safari/13.1',
        'DinosaurStomp/3.5 (Jurassic Era; FossilOS) Firefox/73.0',
        'RobotRevolt/4.4 (AI Uprising; MachineOS) Opera/67.0.3575.31',
        'AlienAbduction/6.6 (Outer Space; ProbeOS) Chrome/83.0.4103.61',
        'NessieExplorer/1.0 (Loch Ness; MonsterOS) Edge/22.21012',
        'PyramidScheme/2.2 (Egypt; MummyOS) Safari/13.1.2',
        'LeprechaunGold/7.7 (Rainbow`s End; CloverOS) Firefox/74.0',
        'SantaClaus/12.25 (North Pole; ElfOS) Opera/68.0.3618.46',
        'VampireHunter/6.6 (Transylvania; GarlicOS) Chrome/84.0.4147.89',
        'BlackbeardPirate/1.7 (Caribbean; TreasureOS) Edge/23.22014',
        'NinjaTurtle/4.4 (Sewer; PizzaOS) Safari/14.0',
        'WerewolfHowl/5.5 (Full Moon; LycanOS) Firefox/75.0',
        'DragonSlayer/3.3 (Fantasy Realm; KnightOS) Opera/69.0.3686.36',
        'PhoenixRise/2.2 (Ashes; FlameOS) Chrome/85.0.4183.83',
        'GargoyleWatch/1.1 (Gothic Cathedral; StoneOS) Edge/24.23016',
        'TimeLord/9.0 (Gallifrey; TARDIS 4.0) Safari/14.0.1',
        'MarsRover/2020 (Red Planet; RoverOS) Firefox/76.0',
        'WizardOfOz/7.7 (Emerald City; YellowBrickRoadOS) Opera/70.0.3728.71',
        'PirateShip/8.8 (Seven Seas; ParrotOS) Chrome/86.0.4240.75',
        'GnomeGardener/3.3 (Enchanted Forest; MushroomOS) Edge/25.24018',
        'MagicCarpet/1.0 (Arabian Nights; GenieOS) Safari/14.0.2',
        'BigfootTracker/5.5 (Pacific Northwest; ForestOS) Firefox/77.0',
        'MoonWalker/11.0 (Lunar Surface; MoonstoneOS) Opera/71.0.3770.198',
        'TreasureHunter/6.6 (Lost City; GoldOS) Chrome/87.0.4280.66',
        'GriffinFlight/2.2 (Mythos; WingOS) Edge/26.25019',
        'SasquatchSearch/4.4 (Wilderness; PineOS) Safari/14.0.3',
        'CyborgUpgrade/3.3 (Future World; NanoOS) Firefox/78.0',
        'GenieLamp/1.1 (Magic Kingdom; WishOS) Opera/72.0.3815.207',
        'KingArthur/5.5 (Camelot; RoundTableOS) Chrome/88.0.4324.96',
        'GhostHunter/6.6 (Haunted House; EctoplasmOS) Edge/27.26020',
        'CyberKnight/2.6.38 (Starship; PixelWorld) Safari/2.6.38',
        'SeaCaptain/6.0.46 (LostIsland; Neptune) Firefox/6.0.46',
        'Underlord/6.1.92 (LostIsland; Atlantis) Edge/6.1.92',
        'TimeWanderer/8.9.93 (CyberDome; Nova) Firefox/8.9.93',
        'CityPhantom/3.7.27 (MysticForest; ShadowRealm) Opera/3.7.27',
        'SeaCaptain/8.4.93 (Underworld; Cybernet) Edge/8.4.93',
        'TimeWanderer/5.7.36 (AncientTemple; PixelWorld) Opera/5.7.36',
    ];

    this.evaluate = function() {
        const randomIndex = Math.floor(Math.random() * userAgents.length);
        return userAgents[randomIndex];
    }
}
FunUserAgent.identifier = "dev.martinsirbe.FunUserAgent";
FunUserAgent.title = "Fun User-Agent";
FunUserAgent.help = "https://martins.irbe.dev/2023/inject-fun-in-api-requests";
registerDynamicValueClass(FunUserAgent)