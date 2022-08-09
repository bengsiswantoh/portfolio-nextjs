import * as Phaser from "phaser";

import Character from "../Character";

export default class MainScene extends Phaser.Scene {
  character;
  princess;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: "map-main" });
    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    map.createLayer("ground", tileFloor);

    map.getObjectLayer("objects").objects.forEach((objects) => {});

    this.character = new Character("blue-ninja", this, 0, 0);

    // this.input.mouse.disableContextMenu();
  }

  update() {
    this.character.update();

    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      this.character.moveTo(pointer.worldX, pointer.worldY);
    }
  }
}
