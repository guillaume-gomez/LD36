import { PositionAfterComputer } from '../Constants.js';

class ComputerScreenVhs extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.image("frame", "res/screen-frame.png");
    this.game.load.image("stand", "res/stand.png");
  }

  create() {
    this.game.add.sprite(51, 400, 'stand');
    this.game.add.sprite(0,0, "frame");
  }

  update() {
  }

}

export default ComputerScreenVhs;
