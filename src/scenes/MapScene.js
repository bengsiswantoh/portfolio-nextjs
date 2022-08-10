import * as Phaser from "phaser";

import Character from "../classes/Character";
import Scroll from "../classes/Scroll";

const scrollClick = (scroll) => {
  console.log(scroll.name);
  scroll.setTint(0xff0000);
};

export default class MapScene extends Phaser.Scene {
  character;
  scrolls;

  cursors;

  constructor() {
    super({ key: "MapScene" });
  }

  preload() {}

  create() {
    this.initMap();

    this.initCamera();

    this.initInput();
  }

  update() {
    // this.character.update();
    // this.scrolls.update();
    // var pointer = this.input.activePointer;
    // if (pointer.isDown) {
    //   this.character.moveTo(pointer.worldX, pointer.worldY);
    // }
    if (this.cursors.left.isDown) {
      this.cameras.main.scrollX--;
    }
    if (this.cursors.right.isDown) {
      this.cameras.main.scrollX++;
    }
    if (this.cursors.up.isDown) {
      this.cameras.main.scrollY--;
    }
    if (this.cursors.down.isDown) {
      this.cameras.main.scrollY++;
    }
  }

  initMap() {
    const map = this.make.tilemap({ key: "map-main" });

    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    const tileHouse = map.addTilesetImage("TilesetHouse", "TilesetHouse");
    map.createLayer("ground", tileFloor);
    map.createLayer("bottom", tileHouse);

    this.scrolls = this.add.group();
    map.getObjectLayer("scrolls").objects.forEach((scroll) => {
      const { x, y, name } = scroll;
      const scrollSprite = new Scroll(scrollClick, name, this, x, y);
      // scrollSprite.on("pointerdown", (pointer) => {
      //   // this.setTint(0xff0000);
      //   scrollClick(this.scrolls.getChildren());
      // });
      // scrollSprite.on("pointerup", (pointer) => {});
      this.scrolls.add(scrollSprite);
    });

    map.getObjectLayer("player").objects.forEach((scroll) => {
      const { x, y, name } = scroll;
      this.character = new Character("blue-ninja", this, x, y);
    });
  }

  initCamera() {
    // const { width, height } = this.game.scale;
    // this.cameras.main.setBounds(0, 0, width, height);

    this.cameras.main.setZoom(3);

    const { x, y } = this.character;
    this.cameras.main.centerOn(x, y);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();
    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
