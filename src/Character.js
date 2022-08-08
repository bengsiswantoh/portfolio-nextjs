import * as Phaser from "phaser";

export default class Character extends Phaser.GameObjects.Sprite {
  constructor(baseKey, scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    // scene.physics.add.existing(this);

    // this.getBody().setCollideWorldBounds(true);

    const animations = [];

    const states = [
      { name: "idle", frameCount: 1, frameRate: 8, repeat: 0 },
      { name: "walk", frameCount: 4, frameRate: 8, repeat: -1 },
    ];

    const directions = ["down", "up", "left", "right"];

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

    this.anims.play("walk-left");
  }
}
