import * as Phaser from "phaser";

import Scroll from "./Scroll";

export default class ScrollWithPillar extends Phaser.GameObjects.Container {
  scroll;

  constructor(scene, x, y, children) {
    super(scene, x, y, children);
    scene.add.existing(this);

    // const scroll = scene.add.image(0, 0, "scroll-empty");
    // this.add(scroll);

    const pillar = scene.add.image(0, 0, "blue-ninja-walk");
    // pillar.setCrop(0, 0, 8, 8);
    this.add(pillar);
  }
}
