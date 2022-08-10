import * as Phaser from "phaser";

import Actor from "../base/Actor";

export default class Scroll extends Actor {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, 16, 16),
      Phaser.Geom.Rectangle.Contains,
      { cursor: "pointer" }
    );

    this.onPointerOut();

    this.on("pointerover", function (event) {
      this.onPointerOver();
    });

    this.on("pointerout", function (event) {
      this.onPointerOut();
    });
  }

  onPointerOver() {
    this.setAlpha(1);
    this.setTexture("scroll-fire");
  }

  onPointerOut() {
    this.setAlpha(0.8);
    this.setTexture("scroll-empty");
  }
}
