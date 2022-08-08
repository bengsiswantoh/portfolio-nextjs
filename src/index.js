import * as Phaser from "phaser";

import MainScene from "./MainScene";

const config = {
  parent: "game",
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

window.game = new Phaser.Game(config);
