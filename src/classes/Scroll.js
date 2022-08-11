import Actor from "../base/Actor";

export default class Scroll extends Actor {
  pointerDown;

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.onPointerOut();
    this.on("pointerover", this.onPointerOver);
    this.on("pointerout", this.onPointerOut);
    this.on("pointerdown", this.onPointerDown);
    this.on("pointerup", this.onPointerUp);

    this.setInteractive({ useHandCursor: true });
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
    this.pointerDown(this);
  }

  onPointerUp(pointer) {
    this.clearTint();
  }

  setPointerDown(pointerDown) {
    this.pointerDown = pointerDown;
  }
}
