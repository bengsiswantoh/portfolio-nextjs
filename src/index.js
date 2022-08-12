import * as Phaser from "phaser";

import LoadingScene from "./scenes/LoadingScene";
import MapScene from "./scenes/MapScene";
import UIScene from "./scenes/UIScene";

const parent = "game";
const div = document.getElementById(parent);

const getWidth = () => {
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
  // scale: {
  //   mode: Phaser.Scale.ScaleModes.NONE,
  //   width,
  //   height,
  // },
  width,
  height,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  // allbacks: {
  //   postBoot: () => {
  //     window.sizeChanged();
  //   },
  // },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [LoadingScene, MapScene, UIScene],
};

// window.sizeChanged = () => {
//   if (window.game.isBooted) {
//     setTimeout(() => {
//       const [width, height] = getWidth();

//       window.game.scale.resize(width, height);
//       window.game.canvas.setAttribute(
//         "style",
//         `display: block; width: ${width}px; height: ${height}px;`
//       );

//       // window.game.scale.resize(window.innerWidth, window.innerHeight);
//       // window.game.canvas.setAttribute(
//       //   "style",
//       //   `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
//       // );
//     }, 100);
//   }
// };
// window.onresize = () => window.sizeChanged();

window.game = new Phaser.Game(config);
window.game.data = div.attributes.data.value;
