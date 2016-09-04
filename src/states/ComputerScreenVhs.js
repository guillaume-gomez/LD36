import { PositionAfterComputer } from '../Constants.js';

const OffsetX = 180;
const OffsetY = 300;

class ComputerScreenVhs extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.image("frame", "res/screen-frame.png");
    this.game.load.image("stand", "res/stand.png");
    this.game.load.spritesheet('buttonPlay', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonPause', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonRestart', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonImageByImge', 'res/button.png', 33, 33);
  }

  create() {
    this.game.add.sprite(51, 400, 'stand');
    this.game.add.sprite(0,0, "frame");
    const buttonPlay = this.game.add.button(OffsetX, OffsetY, 'buttonPlay', this.play, this, 2, 1, 0);
    const buttonImageByImge = this.game.add.button(OffsetX + 40, OffsetY, 'buttonImageByImge', this.rewind, this, 2, 1, 0);
    const buttonRestart = this.game.add.button(OffsetX + 80, OffsetY, 'buttonRestart', this.rewind, this, 2, 1, 0);
    const buttonStop = this.game.add.button(OffsetX + 120, OffsetY, 'buttonPause', this.rewind, this, 2, 1, 0);
  }

  update() {
  }

  play() {

  }
  restart() {
  }

  imageByImage() {

  }

  stop() {

  }

}

export default ComputerScreenVhs;
