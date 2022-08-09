import * as Phaser from "phaser";

import Character from "../sprites/Character";
import Scroll from "../sprites/Scroll";

export default class MainScene extends Phaser.Scene {
  character;
  scroll;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: "map-main" });
    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    map.createLayer("ground", tileFloor);

    map.getObjectLayer("scrolls").objects.forEach((scroll) => {
      console.log(scroll.name);
    });

    this.character = new Character("blue-ninja", this, 0, 0);

    this.scroll = new Scroll("scroll", this, 100, 100);

    // this.input.mouse.disableContextMenu();
  }

  update() {
    this.character.update();
    this.scroll.update();

    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      this.character.moveTo(pointer.worldX, pointer.worldY);
    }
  }
}
