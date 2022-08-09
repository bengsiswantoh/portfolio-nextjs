import * as Phaser from "phaser";

var progressBar;
var progressBox;
var loadingText;
var percentText;
var assetText;

var progress = (value) => {
  percentText.setText(parseInt(value * 100) + "%");
  progressBar.clear();
  progressBar.fillStyle(0xffffff, 1);
  progressBar.fillRect(250, 280, 300 * value, 30);
};

var fileProgress = (file) => {
  assetText.setText("Loading asset: " + file.key);
};

var complete = () => {
  progressBar.destroy();
  progressBox.destroy();
  loadingText.destroy();
  percentText.destroy();
  assetText.destroy();
};

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    this.initLoading();

    this.loadAssets();

    this.load.on("progress", progress);
    this.load.on("fileprogress", fileProgress);
    this.load.on("complete", complete);
  }

  create() {
    this.scene.start("MainScene");
  }

  initLoading() {
    progressBar = this.add.graphics();
    progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);
  }

  loadAssets() {
    this.load.baseURL = "assets/";

    // this.load.image("blue-ninja-dead", "./sprites/blue-ninja/Dead.png");
    const frameHeight = 16;
    const frameWidth = 16;

    const images = [
      { key: "TilesetFloor", src: "/tilemaps/tiles/TilesetFloor.png" },
    ];
    const maps = [{ key: "map-main", src: "/tilemaps/maps/main.json" }];
    const spriteSheets = [
      { key: "blue-ninja-idle", src: "./sprites/blue-ninja/Idle.png" },
      { key: "blue-ninja-walk", src: "./sprites/blue-ninja/Walk.png" },
    ];

    for (const image of images) {
      const { key, src } = image;
      this.load.image(key, src);
    }

    for (const map of maps) {
      const { key, src } = map;
      this.load.tilemapTiledJSON(key, src);
    }

    for (const spriteSheet of spriteSheets) {
      const { key, src } = spriteSheet;
      this.load.spritesheet(key, src, {
        frameWidth,
        frameHeight,
      });
    }
  }
}
