import * as Phaser from "phaser";

import Text from "../classes/Text";

export default class UIScene extends Phaser.Scene {
  mapScene;
  mapCamera;

  graphics;

  constructor() {
    super("UIScene");
  }

  create() {
    this.mapScene = this.scene.get("MapScene");

    this.mapCamera = this.mapScene.cameras.main;

    this.graphics = this.add.graphics();

    // new Text(this, 0, 0, "Waves flung themselves\nat the blue evening.");
  }

  update() {
    this.graphics.clear();
  }

  updateToolTip(source, tooltip) {
    const basePosition = source;
    const camera = this.mapCamera;

    //  The marker point
    const x = (basePosition.x - camera.worldView.x) * camera.zoom;
    const y = (basePosition.y - camera.worldView.y) * camera.zoo;

    const graphics = this.graphics;

    graphics.fillStyle(0x000000, 0.8);
    graphics.lineStyle(4, 0x000000, 0.8);

    //  The text is above this point
    const width = tooltip.width + 32;
    const height = tooltip.height + 32;

    const bx = x - width / 2;
    const by = y - (height + 32);

    graphics.fillRect(bx, by, width, height);

    tooltip.x = bx + 16;
    tooltip.y = by + 16;

    graphics.lineBetween(bx + 16, by + height, x, y);
  }
}
