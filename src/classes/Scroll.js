import * as Phaser from "phaser";

let active = false;

export default class Scroll extends Phaser.GameObjects.Sprite {
  constructor(baseKey, scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);

    this.setTexture("scroll-empty");

    this.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, 16, 32),
      Phaser.Geom.Rectangle.Contains,
      { cursor: "pointer" }
    );

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
