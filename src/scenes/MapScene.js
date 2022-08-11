import * as Phaser from "phaser";

import Character from "../classes/Character";
import ScrollWithPillar from "../classes/ScrollWithPillar";
import MillPropeller from "../classes/MillPropeller";
import MillPropellerWithBuilding from "../classes/MillPropellerWithBuilding";

const CLASSES = {
  about: Character,
  experiences: ScrollWithPillar,
};

const scrollClick = (scroll) => {
  console.log(scroll.name);
};

export default class MapScene extends Phaser.Scene {
  character;
  objects;
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

  update() {}

  initMap() {
    const map = this.make.tilemap({ key: "map-main" });

    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    const tileHouse = map.addTilesetImage("TilesetHouse", "TilesetHouse");
    map.createLayer("floor", tileFloor);
    map.createLayer("house", tileHouse);

    this.objects = this.add.group();
    map.getObjectLayer("objects").objects.forEach((item) => {
      const { x, y, name } = item;
      const itemObject = new CLASSES[name](this, x, y);
      itemObject.name = name;
      itemObject.setPointerUp(scrollClick);
      this.objects.add(itemObject);
    });

    this.millPropellers = this.add.group();
    map.getObjectLayer("mill-propellers").objects.forEach((item) => {
      const { x, y } = item;
      // const itemObject = new MillPropeller(this, x, y);
      const itemObject = new MillPropellerWithBuilding(this, x, y);
      this.millPropellers.add(itemObject);
    });
  }

  initCamera() {
    // const { width, height } = this.game.scale;
    // this.cameras.main.setBounds(0, 0, width, height);

    this.cameras.main.setZoom(2);

    // const { x, y } = this.character;
    this.cameras.main.centerOn(600, 400);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
