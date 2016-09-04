import { PositionAfterComputer } from '../Constants.js';

class ComputerScreenVhs extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.image("frame", "res/screen-frame.png");
  }

  create() {
    this.game.add.sprite(0,0, "frame");
  }

  update() {
  }

}

export default ComputerScreenVhs;
