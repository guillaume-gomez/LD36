import { StringDialog, TextPosition , Style } from '../Constants.js';

const Timer = 500;

class InformationString extends Phaser.Text {

  constructor(game, x, text) {
    super(game, x, TextPosition.y, text, Style);
    game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
    this.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    this.setTextBounds(TextPosition.x0, TextPosition.y0, TextPosition.x1, TextPosition.y1);
    this.visible = false;
  }

  blink() {
    const fn = () => {this.visible  = false};
    setTimeout(fn, Timer);
    this.visible = true;
  }

}

export default InformationString;