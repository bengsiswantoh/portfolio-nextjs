import * as Phaser from "phaser";

import Character from "../classes/Character";
import ScrollWithPillar from "../classes/ScrollWithPillar";
import MillPropellerWithBuilding from "../classes/MillPropellerWithBuilding";

const CLASSES = {
  about: ScrollWithPillar,
  experiences: ScrollWithPillar,
};

const scrollClick = (scroll) => {
  console.log(scroll.name);
};

export default class MapScene extends Phaser.Scene {
  character;

  objects;

  scrolls;
  millPropellers;

  cursors;

  constructor() {
    super({ key: "MapScene" });
  }

  preload() {}

  create() {
    this.initMap();

    this.initCollision();

    this.initCamera();

    this.initInput();

    // console.log(this.game.data);

    const music = this.sound.add("music-credit");
    // music.play();
  }

  update() {
    this.character.update();
    for (const object of this.objects.getChildren()) {
      object.depth = object.body.bottom;
    }
  }

  initMap() {
    const map = this.make.tilemap({ key: "map-main" });

    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    const tileHouse = map.addTilesetImage("TilesetHouse", "TilesetHouse");
    map.createLayer("floor", tileFloor);
    map.createLayer("house", tileHouse);

    this.objects = this.add.group();

    this.scrolls = this.add.group();
    map.getObjectLayer("objects").objects.forEach((item) => {
      const { x, y, name } = item;
      const itemObject = new CLASSES[name](this, x, y);
      itemObject.name = name;
      itemObject.setPointerUp(scrollClick);
      this.objects.add(itemObject);
      this.scrolls.add(itemObject);
    });

    this.millPropellers = this.add.group();
    map.getObjectLayer("mill-propellers").objects.forEach((item) => {
      const { x, y } = item;
      const itemObject = new MillPropellerWithBuilding(this, x, y);
      this.millPropellers.add(itemObject);
    });

    this.character = new Character(this, 550, 400);
    this.objects.add(this.character);
  }

  initCollision() {
    // this.physics.add.overlap(
    //   this.character,
    //   this.scrolls,
    //   (character, scroll) => {
    //     character.stop();
    //     console.log(scroll.name);
    //   }
    // );
    // this.physics.add.collider(
    //   this.character,
    //   this.scrolls,
    //   (character, scroll) => {
    //     character.stop();
    //     console.log(scroll.name);
    //   }
    // );
  }

  initCamera() {
    const { width, height } = this.game.scale;
    this.cameras.main.setBounds(0, 0, width, height);

    this.cameras.main.setZoom(2);

    const { x, y } = this.character;
    // this.cameras.main.centerOn(x, y);
    this.cameras.main.startFollow(this.character, true, 0.09, 0.09);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();
    this.input.on("pointerdown", (pointer) => {
      const { worldX, worldY } = pointer;
      this.character.moveTo(worldX, worldY);
    });
  }
}
