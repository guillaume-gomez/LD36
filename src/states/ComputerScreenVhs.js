import { PositionAfterComputer } from '../Constants.js';

const OffsetX = 180;
const OffsetY = 300;
const MaxFrame = 18;

class ComputerScreenVhs extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.image("frame", "res/screen-frame.png");
    this.game.load.image("stand", "res/stand.png");
    this.game.load.spritesheet('buttonPlay', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonStop', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonRestart', 'res/button.png', 33, 33);
    this.game.load.spritesheet('buttonImageByImge', 'res/button.png', 33, 33);
    this.game.load.spritesheet('videos', "res/videos.png", 372, 292);
  }

  create() {
    this.screen = this.game.add.sprite(64,50, 'videos', 2);
    this.anim = this.screen.animations.add('playVideo');
    this.game.add.sprite(51, 400, 'stand');
    this.game.add.sprite(0,0, "frame");
    const buttonPlay = this.game.add.button(OffsetX, OffsetY, 'buttonPlay', this.play, this, 2, 1, 0);
    const buttonImageByImge = this.game.add.button(OffsetX + 40, OffsetY, 'buttonImageByImge', this.imageByImage, this, 2, 1, 0);
    const buttonRestart = this.game.add.button(OffsetX + 80, OffsetY, 'buttonRestart', this.restart, this, 2, 1, 0);
    const buttonStop = this.game.add.button(OffsetX + 120, OffsetY, 'buttonStop', this.rewind, this, 2, 1, 0);
  }

  update() {
  }

  play() {
    this.anim.play('playVideo', MaxFrame, false);
  }
  restart() {
    this.screen.frame = 0;
  }

  imageByImage() {
    const currentFrame = this.screen.frame;
    const newFrame = currentFrame + 1 < MaxFrame ? currentFrame + 1 : 0;
    this.screen.frame = newFrame;
  }

  stop() {
    this.screen.frame = 0;
  }

}

export default ComputerScreenVhs;
