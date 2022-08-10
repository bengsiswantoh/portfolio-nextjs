import * as Phaser from "phaser";

export default class Actor extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }

  initAnimationsWithDirection(baseKey, states) {
    const animations = [];

    this.state = states[0].name;

    const directions = ["down", "up", "left", "right"];
    this.facing = directions[0];

    for (const state of states) {
      for (const [directionIndex, direction] of directions.entries()) {
        const { name, frameCount, frameMargin, frameRate, repeat } = state;
        const key = `${name}-${direction}`;
        const imageKey = `${baseKey}-${name}`;

        let frames = [];
        let frameIndex = directionIndex;
        for (let index = 0; index < frameCount; index++) {
          frames.push(frameIndex);
          frameIndex += frameMargin;
        }

        animations.push({ key, imageKey, frames, frameRate, repeat });
      }
    }

    this.createAnimations(animations);
  }

  initAnimations(baseKey, states) {
    const animations = [];

    this.state = states[0].name;

    for (const [stateIndex, state] of states.entries()) {
      const { name, frameCount, frameMargin, frameRate, repeat } = state;
      const key = `${name}`;
      const imageKey = `${baseKey}-${name}`;

      let frames = [];
      let frameIndex = stateIndex;
      for (let index = 0; index < frameCount; index++) {
        frames.push(frameIndex);
        frameIndex += frameMargin;
      }

      animations.push({ key, imageKey, frames, frameRate, repeat });
    }

    this.createAnimations(animations);
  }

  createAnimations(animations) {
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
}
