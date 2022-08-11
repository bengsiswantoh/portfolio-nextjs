import * as Phaser from "phaser";

import Character from "../classes/Character";
import Scroll from "../classes/Scroll";
import ScrollWithPillar from "../classes/ScrollWithPillar";
import MillPropeller from "../classes/MillPropeller";

const scrollClick = (scroll) => {
  console.log(scroll.name);
  scroll.setTint(0xff0000);
};

export default class MapScene extends Phaser.Scene {
  character;
  scrolls;
  millPropellers;

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
    map.createLayer("floor", tileFloor);
    map.createLayer("house", tileHouse);

    this.scrolls = this.add.group();
    map.getObjectLayer("scrolls").objects.forEach((item) => {
      const { x, y, name } = item;
      // const itemObject = new Scroll(this, x, y);
      // itemObject.name = name;
      // itemObject.setPointerUp(scrollClick);

      const itemObject = new ScrollWithPillar(this, x, y);
      this.scrolls.add(itemObject);
    });

    this.millPropellers = this.add.group();
    map.getObjectLayer("mill-propellers").objects.forEach((item) => {
      const { x, y } = item;
      const itemObject = new MillPropeller(this, x, y);
      this.millPropellers.add(itemObject);
    });

    map.getObjectLayer("player").objects.forEach((item) => {
      const { x, y } = item;
      this.character = new Character("blue-ninja", this, x, y);
    });
  }

  initCamera() {
    // const { width, height } = this.game.scale;
    // this.cameras.main.setBounds(0, 0, width, height);

    this.cameras.main.setZoom(2);

    const { x, y } = this.character;
    this.cameras.main.centerOn(x, y);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();
    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
