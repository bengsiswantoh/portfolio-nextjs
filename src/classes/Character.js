import * as Phaser from "phaser";

import Sprite from "../base/Sprite";

export default class Character extends Sprite {
  pointerDown;
  pointerUp;

  baseKey = "blue-ninja";
  facing;

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    // scene.physics.add.existing(this);
    // this.body.setSize(16, 16);
    // this.body.setOffset(0, 0);

    const states = [
      { name: "idle", frameCount: 1, frameMargin: 1, frameRate: 8, repeat: 0 },
      { name: "walk", frameCount: 4, frameMargin: 4, frameRate: 8, repeat: -1 },
    ];
    const directions = ["down", "up", "left", "right"];
    this.initAnimationsWithDirection(this.baseKey, states, directions);

    this.onPointerOut();

    this.setInteractive({ useHandCursor: true });

    this.on("pointerover", this.onPointerOver);
    this.on("pointerout", this.onPointerOut);
    this.on("pointerdown", this.onPointerDown);
    this.on("pointerup", this.onPointerUp);
  }

  onPointerOver(pointer) {
    this.setAlpha(1);
    this.state = "walk";
    this.anims.play(`${this.baseKey}-${this.state}-${this.facing}`);
  }

  onPointerOut(pointer) {
    this.setAlpha(0.8);
    this.state = "idle";
    this.anims.play(`${this.baseKey}-${this.state}-${this.facing}`);
  }

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
