import { StringDialog, TextPosition , Style, Code } from '../Constants.js';
class CodeUI extends Phaser.Text {

  constructor(game, x) {
    super(game, x, TextPosition.y, "", Style);
    game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
    this.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    this.setTextBounds(TextPosition.x0, TextPosition.y0, TextPosition.x1, TextPosition.y1);
  }

  keyPress(char) {
    if(char >= '0' && char <= '9') {
      this.text += char;
    }
    if(this.text === Code) {
      //TODO
    }
    if(this.text.length >= Code.length) {
      this.erase();
    }
  }

  erase() {
    this.text = "Invalid";
    const fn = () => {this.text = ""};
    setTimeout(fn, 2000);
  }

}

export default CodeUI;