import * as Phaser from "phaser";

const createFrames = (frameIndex, frameCount, frameMargin) => {
  let frames = [];
  for (let index = 0; index < frameCount; index++) {
    frames.push(frameIndex);
    frameIndex += frameMargin;
  }

  return frames;
};

export default class Actor extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }

  initAnimationsWithDirection(baseKey, states, directions) {
    this.baseKey = baseKey;
    this.state = states[0].name;
    this.facing = directions[0];

    const animations = [];

    for (const state of states) {
      for (const [directionIndex, direction] of directions.entries()) {
        const { name, frameCount, frameMargin, frameRate, repeat } = state;
        const key = `${baseKey}-${name}-${direction}`;
        const imageKey = `${baseKey}-${name}`;

        const frames = createFrames(directionIndex, frameCount, frameMargin);

        animations.push({ key, imageKey, frames, frameRate, repeat });
      }
    }

    this.createAnimations(animations);
  }

  initAnimations(states) {
    this.state = states[0].key;

    const animations = [];

    for (const [stateIndex, state] of states.entries()) {
      const { key, imageKey, frameCount, frameMargin, frameRate, repeat } =
        state;
      const frames = createFrames(stateIndex, frameCount, frameMargin);

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
