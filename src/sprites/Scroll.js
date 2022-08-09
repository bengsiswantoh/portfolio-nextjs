import * as Phaser from "phaser";

let active = false;

export default class Scroll extends Phaser.GameObjects.Sprite {
  constructor(baseKey, scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(16, 16);
    this.body.setOffset(0, 0);

    this.setInteractive();

    this.setTexture("scroll-empty");

    this.on("pointerover", function (event) {
      active = true;
    });

    this.on("pointerout", function (event) {
      active = false;
    });
  }

  update() {
    const texture = active ? "scroll-fire" : "scroll-empty";

    if (this.texture !== texture) {
      this.setTexture(texture);
    }
  }
}
