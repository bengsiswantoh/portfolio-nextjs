import * as Phaser from "phaser";

import LoadingScene from "./scenes/LoadingScene";
import MainScene from "./scenes/MainScene";
import UIScene from "./scenes/UIScene";

const parent = "game";

const getWidth = () => {
  const div = document.getElementById(parent);
  const width = div.clientWidth;
  return [width, window.innerHeight];
};

const [width, height] = getWidth();

// console.log(width);
// console.log("clientWidth", div.clientWidth);
// console.log("offsetWidth", div.offsetWidth);
// console.log("width", getComputedStyle(div).width);

const config = {
  parent,
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    width,
    height,
  },
  type: Phaser.AUTO,
  scene: [LoadingScene, MainScene, UIScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

window.sizeChanged = () => {
  if (window.game.isBooted) {
    setTimeout(() => {
      const [width, height] = getWidth();

      window.game.scale.resize(width, height);
      window.game.canvas.setAttribute(
        "style",
        `display: block; width: ${width}px; height: ${height}px;`
      );

      // window.game.scale.resize(window.innerWidth, window.innerHeight);
      // window.game.canvas.setAttribute(
      //   "style",
      //   `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
      // );
    }, 100);
  }
};
window.onresize = () => window.sizeChanged();

window.game = new Phaser.Game(config);
