import * as Phaser from "phaser";

const progressBarWidth = 320;
const progressBarHeight = 50;
const progressBarMargin = 10;
let progressBarX = 0;
let progressBarY = 0;

let progressBar;
let progressBox;
let loadingText;
let percentText;
let assetText;

const progress = (value) => {
  percentText.setText(parseInt(value * 100) + "%");
  progressBar.clear();
  progressBar.fillStyle(0xffffff, 1);
  progressBar.fillRect(
    progressBarX + progressBarMargin,
    progressBarY + progressBarMargin,
    (progressBarWidth - 2 * progressBarMargin) * value,
    progressBarHeight - 2 * progressBarMargin
  );
};

const fileProgress = (file) => {
  assetText.setText("Loading asset: " + file.key);
};

const complete = () => {
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
    this.scene.start("MapScene");
    this.scene.start("UIScene");
  }

  initLoading() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    progressBarX = width / 2 - progressBarWidth / 2;
    progressBarY = height / 2 - progressBarHeight / 2;

    progressBar = this.add.graphics();
    progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(
      progressBarX,
      progressBarY,
      progressBarWidth,
      progressBarHeight
    );

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

    const images = [
      { key: "TilesetFloor", src: "/tilemaps/tiles/TilesetFloor.png" },
      { key: "TilesetHouse", src: "/tilemaps/tiles/TilesetHouse.png" },

      { key: "scroll-empty", src: "/images/scrolls/ScrollEmpty.png" },
      { key: "scroll-fire", src: "/images/scrolls/ScrollFire.png" },
    ];

    const spriteSheets = [
      {
        key: "blue-ninja-idle",
        src: "./images/blue-ninja/Idle.png",
        frameWidth: 16,
        frameHeight: 16,
      },
      {
        key: "blue-ninja-walk",
        src: "./images/blue-ninja/Walk.png",
        frameWidth: 16,
        frameHeight: 16,
      },

      {
        key: "mill-propeller",
        src: "./images/mill-propeller/SpriteSheet64x64.png",
        frameWidth: 64,
        frameHeight: 64,
      },
    ];

    const maps = [{ key: "map-main", src: "/tilemaps/maps/main.json" }];

    const musics = [
      { key: "music-credit", src: "/musics/15 - Credit Theme.ogg" },
    ];

    for (const image of images) {
      const { key, src } = image;
      this.load.image(key, src);
    }

    for (const spriteSheet of spriteSheets) {
      const { key, src, frameWidth, frameHeight } = spriteSheet;
      this.load.spritesheet(key, src, {
        frameWidth,
        frameHeight,
      });
    }

    for (const map of maps) {
      const { key, src } = map;
      this.load.tilemapTiledJSON(key, src);
    }

    for (const music of musics) {
      const { key, src } = music;
      this.load.audio(key, src);
    }
  }
}
