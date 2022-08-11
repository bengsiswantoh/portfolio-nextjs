import * as Phaser from "phaser";

export default class ScrollWithPillar extends Phaser.GameObjects.Container {
  pointerDown;
  pointerUp;

  constructor(scene, x, y, children) {
    super(scene, x, y, children);
    scene.add.existing(this);

    this.on("pointerover", this.onPointerOver);
    this.on("pointerout", this.onPointerOut);
    this.on("pointerdown", this.onPointerDown);
    this.on("pointerup", this.onPointerUp);
  }

  onPointerOver(pointer) {}

  onPointerOut(pointer) {}

  onPointerDown(pointer) {
    if (this.pointerDown) {
      this.pointerDown(this);
    }
  }

  onPointerUp(pointer) {
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
