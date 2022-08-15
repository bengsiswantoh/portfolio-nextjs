import * as Phaser from "phaser";

import Player from "../classes/Player";
import ScrollWithPillar from "../classes/ScrollWithPillar";
import MillPropellerWithBuilding from "../classes/MillPropellerWithBuilding";

const scrollClick = (scroll) => {
  console.log(scroll.name);
};

const playerCollide = (player, other) => {
  player.stop();
};

export default class MapScene extends Phaser.Scene {
  // objects;
  data;

  houseLayer;

  player;

  scrolls;
  millPropellers;

  constructor() {
    super({ key: "MapScene" });
  }

  preload() {}

  create() {
    this.initMap();
    this.initCollision();
    this.initCamera();
    this.initInput();

    this.data = JSON.parse(this.game.data);

    const music = this.sound.add("music-credit");
    // music.play();
  }

  update() {
    this.player.update();
    // for (const object of this.objects.getChildren()) {
    //   object.depth = object.body.bottom;
    // }
  }

  initMap() {
    const map = this.make.tilemap({ key: "map-main" });

    const tileFloor = map.addTilesetImage("TilesetFloor", "TilesetFloor");
    const tilesetInteriorFloor = map.addTilesetImage(
      "TilesetInteriorFloor",
      "TilesetInteriorFloor"
    );
    const tileHouse = map.addTilesetImage("TilesetHouse", "TilesetHouse");

    map.createLayer("floor", tileFloor);
    map.createLayer("interiorFloor", tilesetInteriorFloor);
    this.houseLayer = map.createLayer("house", tileHouse);
    map.createLayer("houseUpper", tileHouse);

    this.houseLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    // this.houseLayer.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
    // });

    // this.objects = this.add.group();

    this.scrolls = this.add.group();
    map.getObjectLayer("scrolls").objects.forEach((item) => {
      const { x, y, name } = item;
      const itemObject = new ScrollWithPillar(this, x, y);
      itemObject.name = name;
      // itemObject.setPointerUp(scrollClick);
      this.scrolls.add(itemObject);
      // this.objects.add(itemObject);
    });

    this.millPropellers = this.add.group();
    map.getObjectLayer("millPropellers").objects.forEach((item) => {
      const { x, y } = item;
      const itemObject = new MillPropellerWithBuilding(this, x, y);
      this.millPropellers.add(itemObject);
      // this.objects.add(itemObject);
    });

    map.getObjectLayer("player").objects.forEach((item) => {
      const { x, y } = item;
      this.player = new Player(this, x, y);
    });
  }

  initCollision() {
    const { width, height } = this.houseLayer;
    this.physics.world.setBounds(0, 0, width, height);

    this.physics.add.collider(this.player, this.houseLayer, playerCollide);

    this.physics.add.collider(this.player, this.scrolls, (player, scroll) => {
      player.stop();
      console.log(scroll.name);
    });

    // this.physics.add.overlap(this.player, this.scrolls, (player, scroll) => {
    //   player.stop();
    //   console.log(scroll.name);
    // });
  }

  initCamera() {
    const { width, height } = this.houseLayer;
    this.physics.world.setBounds(0, 0, width, height);

    this.cameras.main.setZoom(2);

    const { x, y } = this.player;
    // this.cameras.main.centerOn(x, y);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
  }

  initInput() {
    // this.input.mouse.disableContextMenu();
    this.input.on("pointerdown", (pointer) => {
      const { worldX, worldY } = pointer;
      this.player.moveTo(worldX, worldY);
    });
  }
}
