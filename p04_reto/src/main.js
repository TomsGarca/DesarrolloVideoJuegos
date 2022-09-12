import Bootloader from "./scenes/Bootloader.js";
const config = {
    title: "DeadSouls",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 5120,
        height: 1600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#e67e22",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader]
    };
    const game = new Phaser.Game(config);