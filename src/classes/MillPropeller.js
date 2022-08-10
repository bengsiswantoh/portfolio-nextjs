import Actor from "../base/Actor";

export default class MillPropeller extends Actor {
  state;

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    const states = [
      {
        key: "active",
        imageKey: "mill-propeller",
        frameCount: 4,
        frameMargin: 1,
        frameRate: 8,
        repeat: -1,
      },
    ];
    this.initAnimations(states);

    this.anims.play(this.state);
  }
}
