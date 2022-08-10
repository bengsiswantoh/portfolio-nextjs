import Actor from "../base/Actor";

export default class Scroll extends Actor {
  pointerDown;

  constructor(pointerDown, name, scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    // this.setInteractive(
    //   new Phaser.Geom.Rectangle(0, 0, 16, 16),
    //   Phaser.Geom.Rectangle.Contains,
    //   { cursor: "pointer" }
    // );
    this.setInteractive({ cursor: "pointer" });

    this.pointerDown = pointerDown;
    this.name = name;

    this.onPointerOut();
    this.on("pointerover", this.onPointerOver);
    this.on("pointerout", this.onPointerOut);
    this.on("pointerdown", this.onPointerDown);
    this.on("pointerup", this.onPointerUp);
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
}
