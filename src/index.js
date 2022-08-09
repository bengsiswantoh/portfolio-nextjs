import * as Phaser from "phaser";

import MainScene from "./MainScene";

const parent = "game";
const div = document.getElementById(parent);
const zoom = 3;
const width = div.clientWidth / zoom;

console.log(width);
// console.log("clientWidth", div.clientWidth);
// console.log("offsetWidth", div.offsetWidth);
// console.log("width", getComputedStyle(div).width);

const config = {
  parent,
  zoom,
  width,
  height: width,
  type: Phaser.AUTO,
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

window.game = new Phaser.Game(config);
