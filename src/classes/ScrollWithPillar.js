import * as Phaser from "phaser";

import Scroll from "./Scroll";
import Property from "../base/Property";

export default class ScrollWithPillar extends Phaser.GameObjects.Container {
  scroll;

  constructor(scene, x, y, children) {
    super(scene, x, y, children);
    scene.add.existing(this);
    // scene.physics.add.existing(this);

    const pillar = new Property(scene, 0, -4, "TilesetHouse");
    pillar.cropImage(7, 17, 1, 2);
    this.add(pillar);

    this.scroll = scene.add.image(0, -12, "scroll-empty");
    this.add(this.scroll);

    // this.body.setSize(16, 40);
    this.setSize(16, 40);
    this.setInteractive({ useHandCursor: true });

    // this.setInteractive({
    //   hitArea: new Phaser.Geom.Rectangle(0, 0, 16, 40),
    //   hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    //   useHandCursor: true,
    // });

    // this.on("pointerover", this.onPointerOver);
    // this.on("pointerout", this.onPointerOut);
  }

  onPointerOver(pointer) {
    // this.setAlpha(1);
    this.scroll.setTexture("scroll-fire");
    console.log("a");
  }

  onPointerOut(pointer) {
    // this.setAlpha(0.8);
    this.scroll.setTexture("scroll-empty");
    // this.clearTint();
  }
}
