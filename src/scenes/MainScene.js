import * as Phaser from "phaser";

import Character from "../sprites/Character";
import Scroll from "../sprites/Scroll";

export default class MainScene extends Phaser.Scene {
  character;
  scroll;

  cursors;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {}

  create() {
    this.initMap();

    this.initCamera();

    this.initInput();
  }

  update() {
    this.character.update();
    // this.scroll.update();
    // var pointer = this.input.activePointer;
    // if (pointer.isDown) {
    //   // this.character.moveTo(pointer.worldX, pointer.worldY);
    // }

    // if (this.cursors.left.isDown) {
    //   this.character.body.setVelocityX(-160);
    // } else if (this.cursors.right.isDown) {
    //   this.character.body.setVelocityX(160);
    // } else {
    //   this.character.body.setVelocityX(0);
    // }
  }

  initMap() {
    const map = this.make.tilemap({ key: "map-main" });

    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    const tileHouse = map.addTilesetImage("TilesetHouse", "TilesetHouse");
    map.createLayer("ground", tileFloor);
    map.createLayer("bottom", tileHouse);

    // map.getObjectLayer("scrolls").objects.forEach((scroll) => {
    //   console.log(scroll.name);
    // });

    this.character = new Character("blue-ninja", this, 200, 200);

    // this.scroll = new Scroll("scroll", this, 104, 112);
  }

  initCamera() {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.character, true, 0.09, 0.09);
    this.cameras.main.setZoom(3);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
