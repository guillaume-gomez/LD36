import { StringDialog, TextPosition , Style, Code } from '../Constants.js';
class CodeUI extends Phaser.Text {

  constructor(game, x, callBackFn) {
    super(game, x, TextPosition.y, "", Style);
    game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
    this.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    this.setTextBounds(TextPosition.x0, TextPosition.y0, TextPosition.x1, TextPosition.y1);
    this.hide = true;
    this.callBack = callBackFn
  }

  keyPress(char) {
    if(this.hide) {
      return;
    }

    if(char >= '0' && char <= '9') {
      this.text += char;
    }
    if(this.text === Code) {
      this.callBack();
      this.hideText();
      this.text = "";
      return;
    }
    if(this.text.length >= Code.length) {
      this.invalid();
    }
  }

  hideText() {
    this.hide = true;
  }
  showText() {
    this.hide = false;
  }

  invalid() {
    this.text = "Invalid";
    const fn = () => {this.text = ""};
    setTimeout(fn, 2000);
  }

}

export default CodeUI;