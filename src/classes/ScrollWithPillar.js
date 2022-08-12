import Container from "../base/Container";
import Property from "../base/Property";

export default class ScrollWithPillar extends Container {
  scroll;

  constructor(scene, x, y, children) {
    super(scene, x, y, children);

    this.setSize(16, 40);

    scene.physics.add.existing(this, true);
    this.body.setSize(this.width, this.height);

    const pillar = new Property(scene, 0, 4, "TilesetHouse");
    pillar.cropImage(112, 272, 16, 32);
    this.add(pillar);

    this.scroll = scene.add.image(0, -12, "scroll-empty");
    this.add(this.scroll);
    this.onPointerOut();

    this.setInteractive({ useHandCursor: true });
  }

  onPointerOver(pointer) {
    this.setAlpha(1);
    this.scroll.setTexture("scroll-fire");
  }

  onPointerOut(pointer) {
    this.setAlpha(0.8);
    this.scroll.setTexture("scroll-empty");
  }
}
