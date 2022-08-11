import * as Phaser from "phaser";

export default class Property extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }

  cropImage(row, column, rowCount, columnCount) {
    const tileSize = 16;

    const cropX = row * tileSize;
    const cropY = column * tileSize;
    const cropWidth = rowCount * tileSize;
    const cropHeight = columnCount * tileSize;
    this.setCrop(cropX, cropY, cropWidth, cropHeight);

    this.setOrigin(0);
    this.x -= cropX + tileSize / 2;
    this.y -= cropY + tileSize / 2;
  }
}
