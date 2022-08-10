import * as Phaser from "phaser";

import Text from "../classes/Text";

export default class UIScene extends Phaser.Scene {
  mainScene;
  // mainC

  constructor() {
    super("UIScene");
  }

  create() {
    this.mainScene = this.scene.get("MapScene");
    // new Text(this, 0, 0, "Waves flung themselves\nat the blue evening.");
  }
}
