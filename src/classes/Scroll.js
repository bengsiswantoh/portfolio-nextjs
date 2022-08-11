import * as Phaser from "phaser";

export default class Scroll extends Phaser.GameObjects.Image {
  pointerDown;
  pointerUp;

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);

    this.onPointerOut();
    // this.on("pointerover", this.onPointerOver);
    // this.on("pointerout", this.onPointerOut);
    // this.on("pointerdown", this.onPointerDown);
    // this.on("pointerup", this.onPointerUp);

    // this.setInteractive({ useHandCursor: true });
  }

  onPointerOver(pointer) {
    this.setAlpha(1);
    this.setTexture("scroll-fire");
  }

  onPointerOut(pointer) {
    this.setAlpha(0.8);
    this.setTexture("scroll-empty");
    this.clearTint();
  }

  onPointerDown(pointer) {
    if (this.pointerDown) {
      this.pointerDown(this);
    }
  }

  onPointerUp(pointer) {
    this.clearTint();
    if (this.pointerUp) {
      this.pointerUp(this);
    }
  }

  setPointerDown(pointerDown) {
    this.pointerDown = pointerDown;
  }

  setPointerUp(pointerUp) {
    this.pointerUp = pointerUp;
  }
}
