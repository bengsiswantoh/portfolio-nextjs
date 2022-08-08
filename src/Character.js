import * as Phaser from "phaser";

export default class Character extends Phaser.GameObjects.Sprite {
  moveSpeed = 200;

  target = new Phaser.Math.Vector2();
  state;
  facing;

  constructor(baseKey, scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.scale = 3;

    scene.add.existing(this);

    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(16, 16);
    this.body.setOffset(0, 0);

    this.setAnimations(baseKey);

    this.anims.play(`${this.state}-${this.facing}`);
    this.target.x = this.body.position.x;
    this.target.y = this.body.position.y;
  }

  update() {
    const distance = Phaser.Math.Distance.Between(
      this.body.x,
      this.body.y,
      this.target.x,
      this.target.y
    );
    console.log(distance);

    if (distance <= 35) {
      this.body.velocity.set(0, 0);
    }

    this.playAnimation();
  }

  setAnimations(baseKey) {
    const animations = [];

    const states = [
      { name: "idle", frameCount: 1, frameRate: 8, repeat: 0 },
      { name: "walk", frameCount: 4, frameRate: 8, repeat: -1 },
    ];
    this.state = states[0].name;

    const directions = ["down", "up", "left", "right"];
    this.facing = directions[0];

    for (const state of states) {
      for (const [directionIndex, direction] of directions.entries()) {
        const { name, frameCount, frameRate, repeat } = state;
        const key = `${name}-${direction}`;
        const imageKey = `${baseKey}-${name}`;

        let frames = [];
        let frameIndex = directionIndex;
        for (let index = 0; index < frameCount; index++) {
          frames.push(frameIndex);
          frameIndex += frameCount;
        }

        animations.push({ key, imageKey, frames, frameRate, repeat });
      }
    }

    for (const animation of animations) {
      const { key, frames, frameRate, repeat, imageKey } = animation;
      this.anims.create({
        key,
        frames: this.anims.generateFrameNumbers(imageKey, { frames }),
        frameRate,
        repeat,
      });
    }
  }

  playAnimation() {
    if (Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)) {
      if (this.body.velocity.x > 0) {
        this.facing = "right";
      }

      if (this.body.velocity.x < 0) {
        this.facing = "left";
      }
    } else {
      if (this.body.velocity.y < 0) {
        this.facing = "up";
      }

      if (this.body.velocity.y > 0) {
        this.facing = "down";
      }
    }

    this.state = "walk";
    if (this.body.speed === 0) {
      this.state = "idle";
    }

    this.anims.play(`${this.state}-${this.facing}`, true);
  }

  moveTo(x, y) {
    if (this.state === "walk") {
      return;
    }

    this.target.set(x, y);
    this.scene.physics.moveToObject(this, this.target, this.moveSpeed);
  }
}
