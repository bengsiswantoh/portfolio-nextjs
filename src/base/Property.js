import * as Phaser from "phaser";

export default class Property extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }

  cropImage(x, y, width, height) {
    this.setCrop(x, y, width, height);

    this.setOrigin(0);
    this.x -= x + width / 2;
    this.y -= y + height / 2;
  }
}
