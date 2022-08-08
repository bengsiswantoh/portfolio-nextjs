import * as Phaser from "phaser";

import Character from "./Character";

export default class MainScene extends Phaser.Scene {
  character;
  princess;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    this.load.baseURL = "assets/";

    // this.load.image("blue-ninja-dead", "./sprites/blue-ninja/Dead.png");
    const frameHeight = 16;
    const frameWidth = 16;

    const spriteSheets = [
      { key: "blue-ninja-idle", src: "./sprites/blue-ninja/Idle.png" },
      { key: "blue-ninja-walk", src: "./sprites/blue-ninja/Walk.png" },
      // { key: "princess-idle", src: "./sprites/princess/Idle.png" },
      // { key: "princess-walk", src: "./sprites/princess/Walk.png" },
    ];

    for (const spriteSheet of spriteSheets) {
      const { key, src } = spriteSheet;
      this.load.spritesheet(key, src, {
        frameWidth,
        frameHeight,
      });
    }
  }

  create() {
    // this.add.image(400, 300, "blue-ninja-dead");
    this.character = new Character("blue-ninja", this, 100, 100);
  }

  update() {}
}
