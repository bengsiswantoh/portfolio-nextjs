import * as Phaser from "phaser";

import Text from "../classes/Text";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    new Text(this, 0, 0, "Waves flung themselves\nat the blue evening.");
  }
}
