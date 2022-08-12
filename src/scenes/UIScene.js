import * as Phaser from "phaser";

import Text from "../classes/Text";

export default class UIScene extends Phaser.Scene {
  mapScene;
  mapCamera;

  graphics;

  tooltips;
  scrolls;

  constructor() {
    super("UIScene");
  }

  create() {
    this.mapScene = this.scene.get("MapScene");

    this.mapCamera = this.mapScene.cameras.main;

    this.graphics = this.add.graphics();

    this.tooltips = this.add.group();
    this.scrolls = this.mapScene.scrolls.getChildren();
    for (const object of this.scrolls) {
      const text = this.add.text(0, 0).setText(object.name);
      this.tooltips.add(text);
    }
  }

  update() {
    this.graphics.clear();

    for (const [objectIndex, object] of this.scrolls.entries()) {
      this.updateToolTip(object, this.tooltips.getChildren()[objectIndex]);
    }
  }

  updateToolTip(source, tooltip) {
    const basePosition = source;
    const camera = this.mapCamera;

    //  The marker point
    const x = (basePosition.x - camera.worldView.x) * camera.zoom;
    const y = (basePosition.y - camera.worldView.y) * camera.zoom;

    const graphics = this.graphics;

    graphics.fillStyle(0x000000, 0.8);
    graphics.lineStyle(4, 0x000000, 0.8);

    //  The text is above this point
    const width = tooltip.width + 32;
    const height = tooltip.height + 32;

    const bx = x - width / 2;
    // const by = y - (height + 32);
    const by = y - height - source.height * camera.zoom;

    graphics.fillRect(bx, by, width, height);

    tooltip.x = bx + 16;
    tooltip.y = by + 16;

    graphics.lineBetween(bx + 16, by + height, x, y);
  }
}
