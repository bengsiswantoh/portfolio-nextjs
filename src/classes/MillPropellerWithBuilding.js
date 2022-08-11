import Container from "../base/Container";
import Property from "../base/Property";
import MillPropeller from "./MillPropeller";

export default class MillPropellerWithBuilding extends Container {
  constructor(scene, x, y, children) {
    super(scene, x, y, children);

    this.setSize(48, 72);

    // scene.physics.add.existing(this);
    // this.body.setSize(this.width, this.height);

    const building = new Property(scene, 0, 4, "TilesetHouse");
    building.cropImage(464, 64, 48, 64);
    this.add(building);

    const propeller = new MillPropeller(scene, 0, -8);
    this.add(propeller);

    // this.setInteractive({ useHandCursor: true });
  }
}
