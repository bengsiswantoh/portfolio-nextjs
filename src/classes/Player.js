import * as Phaser from "phaser";

import Sprite from "../base/Sprite";

export default class Player extends Sprite {
  baseKey = "blue-ninja";
  facing;

  moveSpeed = 200;
  target = new Phaser.Math.Vector2();

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.physics.add.existing(this);
    this.body.setSize(16, 16);
    this.body.setOffset(0, 0);
    this.body.setCollideWorldBounds(true);

    const states = [
      { name: "idle", frameCount: 1, frameMargin: 1, frameRate: 8, repeat: 0 },
      { name: "walk", frameCount: 4, frameMargin: 4, frameRate: 8, repeat: -1 },
    ];
    const directions = ["down", "up", "left", "right"];
    this.initAnimationsWithDirection(this.baseKey, states, directions);

    this.anims.play(`${this.baseKey}-${this.state}-${this.facing}`);

    this.target.set(this.body.center);
  }

  update() {
    const distance = Phaser.Math.Distance.Between(
      this.body.center.x,
      this.body.center.y,
      this.target.x,
      this.target.y
    );

    if (this.body.speed > 0) {
      this.state = "walk";

      if (Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)) {
        this.facing = this.body.velocity.x > 0 ? "right" : "left";
      } else {
        this.facing = this.body.velocity.y > 0 ? "down" : "up";
      }

      if (distance <= 4) {
        this.stop();
      }
    }

    this.anims.play(`${this.baseKey}-${this.state}-${this.facing}`, true);
  }

  moveTo(x, y) {
    this.target.set(x, y);
    this.scene.physics.moveToObject(this, this.target, this.moveSpeed);
  }

  stop() {
    this.target.set(this.body.center);
    this.body.stop();
    // this.body.reset(this.target.x, this.target.y);
    this.state = "idle";
  }
}
